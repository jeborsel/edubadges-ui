<script>
  import {onMount} from "svelte";
  import {queryData} from "../../api/graphql";
  import {Breadcrumb, PermissionsHeader, PermissionsManagement} from "./index";
  import {entityType} from "../../util/entityTypes"
  import {addStaffType, staffType} from "../../util/staffTypes";
  import {enrichUser} from "../../util/userPermissions";
  import {issuerIcon, facultyIcon, badgeclassIcon, userManagementIcon, institutionIcon} from "../../icons";
  import UserBreadcrumb from "./UserBreadcrumb.svelte";
  import Spinner from "../Spinner.svelte";

  export let entity;

  let institution;
  let institutionStaffMemberships = [];
  let issuerGroupStaffMemberships = [];
  let issuerStaffMemberships = [];
  let badgeClassStaffMemberships = [];
  let currentUser = {};
  let loaded = false;

  const query = `query {
    currentInstitution {
      entityId,
      name,
      faculties {
        name,
        entityId,
        issuers {
          name,
          entityId,
          badgeclasses {
            name,
            entityId
          },
          faculty {
            name,
            entityId
          }
        }
      }
    },
    currentUser {
      entityId,
      firstName,
      lastName,
      email,
      institutionStaff {
        entityId,
        institution {
          name,
          entityId,
          faculties {
            name,
            entityId,
            issuers {
              name,
              entityId,
              badgeclasses {
                name,
                entityId
              }
            }
          }
        }
      },
      facultyStaffs {
        entityId,
        faculty {
          name,
          entityId,
          issuers {
            name,
            entityId,
            badgeclasses {
              name,
              entityId
            }
          }
        }
      }
      issuerStaffs {
        entityId,
        issuer {
          name,
          entityId,
          badgeclasses {
            name,
            entityId,
          },
          faculty {
            name,
            entityId,
          }
        }
      }
      badgeclassStaffs {
        entityId,
        mayAdministrateUsers,
        mayUpdate,
        mayAward,
        badgeclass {
          entityId,
          name,
          issuer {
            name,
            entityId,
            faculty {
              name
            }
          }
        }
      },
    }
  }`;

  onMount(() => {
    queryData(query).then(res => {
      institution = res.currentInstitution;
      if (res.currentUser.institutionStaff) {
        institutionStaffMemberships = addStaffType([res.currentUser.institutionStaff], staffType.INSTITUTION_STAFF);
      } else {
        institutionStaffMemberships = [];
      }
      issuerGroupStaffMemberships = addStaffType(res.currentUser.facultyStaffs, staffType.ISSUER_GROUP_STAFF);
      issuerStaffMemberships = addStaffType(res.currentUser.issuerStaffs, staffType.ISSUER_STAFF);
      badgeClassStaffMemberships = addStaffType(res.currentUser.badgeclassStaffs, staffType.BADGE_CLASS_STAFF);
      enrichUser(institution, institutionStaffMemberships, issuerGroupStaffMemberships, issuerStaffMemberships, badgeClassStaffMemberships);
      currentUser = res.currentUser;
      loaded = true;
    })
  });

  const tabs = [
    {
      entity: "institution",
      href: `/permissions/${entityType.INSTITUTION}`,
      icon: institutionIcon
    },
    {
      entity: "faculties",
      href: `/permissions/${entityType.ISSUER_GROUP}`,
      icon: facultyIcon
    },
    {
      entity: "issuers",
      href: `/permissions/${entityType.ISSUER}`,
      icon: issuerIcon
    },
    {
      entity: "badgeclasses",
      href: `/permissions/${entityType.BADGE_CLASS}`,
      icon: badgeclassIcon
    },
  ];
</script>
<style>
  div.container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
{#if loaded}
  <div class="container">
    <UserBreadcrumb isProfile={false} user={currentUser}/>

    <PermissionsHeader
      {tabs}
    />

    <PermissionsManagement
        {entity}
        institutionStaffs={institutionStaffMemberships}
        issuerGroupStaffs={issuerGroupStaffMemberships}
        issuerStaffs={issuerStaffMemberships}
        badgeClassStaffs={badgeClassStaffMemberships}
    />
  </div>
{:else}
  <Spinner/>
{/if}
