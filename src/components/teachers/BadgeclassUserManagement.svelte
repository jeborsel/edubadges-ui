<script>
  import {queryData} from "../../api/graphql";
  import {onMount} from "svelte";
  import I18n from "i18n-js";
  import {UserManagement} from "../teachers";
  import {staffType, addStaffType} from "../../util/staffTypes";

  export let entity;
  export let entityId;

  let institutionStaffMembers = [];
  let issuerGroupStaffMembers = [];
  let issuerStaffMembers = [];
  let badgeClassStaffMembers = [];
  let userProvisionments = [];
  let selection = [];
  let permissions;

  const query = `query ($entityId: String){
    badgeClass(id: $entityId) {
      name,
      userprovisionments {
        email,
        createdAt,
        entityId,
        data
      },
      staff {
        entityId,
        mayAdministrateUsers,
        mayUpdate,
        mayAward,
        user {
          firstName,
          lastName,
          entityId,
          email
        }
      },
      issuer {
        name,
        staff {
          entityId,
          mayAdministrateUsers,
          user {
            firstName,
            lastName,
            entityId,
            email
          }
        },
        faculty {
          name,
          staff {
            entityId,
            mayAdministrateUsers,
            user {
              firstName,
              lastName,
              entityId,
              email
            }
          },
          institution {
            name,
            staff {
              entityId,
              mayAdministrateUsers,
              user {
                firstName,
                lastName,
                entityId,
                email
              }
            }
          }
        }
      },
      permissions {
        mayAdministrateUsers
      }
		}
	}`;

  const reload = () => {
    queryData(query, {entityId}).then(res => {
      institutionStaffMembers = addStaffType(res.badgeClass.issuer.faculty.institution.staff, staffType.INSTITUTION_STAFF);
      issuerGroupStaffMembers = addStaffType(res.badgeClass.issuer.faculty.staff, staffType.ISSUER_GROUP_STAFF);
      issuerStaffMembers = addStaffType(res.badgeClass.issuer.staff, staffType.ISSUER_STAFF);
      badgeClassStaffMembers = addStaffType(res.badgeClass.staff, staffType.BADGE_CLASS_STAFF);
      userProvisionments = addStaffType(res.badgeClass.userprovisionments, staffType.USER_PROVISIONMENT);
      permissions = res.badgeClass.permissions;
    })
  };


  onMount(reload);
</script>

<UserManagement
    {entity}
    {entityId}
    {permissions}
    institutionStaffs={institutionStaffMembers}
    issuerGroupStaffs={issuerGroupStaffMembers}
    issuerStaffs={issuerStaffMembers}
    badgeClassStaffs={badgeClassStaffMembers}
    {userProvisionments}
    {reload}
/>
