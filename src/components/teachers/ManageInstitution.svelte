<script>
  import {onMount} from "svelte";
  import I18n from "i18n-js";

  import {Router, Route, navigate} from "svelte-routing";
  import {
    Breadcrumb,
    EntityHeader,
    Issuers,
    Faculties,
    HeaderList,
    InviteUser
  } from "../teachers";
  import {issuerIcon, facultyIcon, userManagementIcon} from "../../icons";
  import {queryData} from "../../api/graphql";
  import {headerStaff, headerEntity} from "../../api/queries";
  import {Spinner} from "../index";
  import {InstitutionUserManagement} from "../teachers/";
  import {entityType} from "../../util/entityTypes"
  import {permissionsRole} from "../../util/rolesToPermissions";

  let entityId;
  export let subEntity;

  let institution = {staff: []};
  let permissions;
  let faculties = [];
  let issuers = [];
  let loaded = false;

  let contentType;

  const query = `query {
    currentInstitution {
      ${headerEntity},
      ${headerStaff},
      name,
      image,
      gradingTable,
      brin,
      entityId,
      contentTypeId,
      permissions {
        mayCreate,
        mayUpdate,
        mayDelete
      }
		},
		faculties {
      name,
      entityId,
			issuers {
				entityId,
				badgeclasses {
				  entityId,
				  pendingEnrollments {
				    entityId
				  }
				}
      },
		},
		issuers {
      name,
      entityId,
			faculty {
				name
			},
			image,
			badgeclasses {
				entityId,
				badgeAssertions {
				  entityId
				},
				pendingEnrollments {
				  entityId
				}
      },
		}
  }`;

  onMount(() => {
    queryData(query).then(res => {
      permissions = res.currentInstitution.permissions;
      institution = res.currentInstitution;
      faculties = res.faculties;
      issuers = res.issuers;
      loaded = true;
      entityId = res.currentInstitution.entityId;
      contentType = res.currentInstitution.contentTypeId;
    });
  });

  const tabs = [
    {
      entity: "faculties",
      href: "/manage/institution/groups",
      icon: facultyIcon
    },
    {
      entity: "issuers",
      href: "/manage/institution/issuers",
      icon: issuerIcon
    },
    {
      entity: "userManagement",
      href: "/manage/institution/user-management",
      icon: userManagementIcon
    }
  ];

  $: if (!subEntity) navigate(tabs[1].href, {replace: true});
  $: mayCreateFaculty = permissions && permissions.mayCreate;
  $: mayCreateIssuer = permissions && permissions.mayCreate && faculties.length > 0;
  $: mayUpdate = permissions && permissions.mayUpdate;

  $: headerItems = [
    {
      attr: "created",
      type: "date",
      value: institution.createdAt
    },
    {
      attr: "admin",
      type: "adminNames",
      value: institution
    },
    {
      attr: "brin",
      type: "text",
      value: institution.brin
    },
    {
      attr: "grading_table",
      type: "link",
      value: institution.gradingTable
    }
  ];

  const permissionsRoles = [{value: permissionsRole.ADMIN, name: I18n.t("editUsers.institution.admin")}];

</script>

{#if !loaded}
  <Spinner/>
{:else}
  <Breadcrumb/>
  <EntityHeader
    {tabs}
    {headerItems}
    object={institution}
    entity={entityType.INSTITUTION}
    mayUpdate={mayUpdate}
  />

  <Router>
    <Route path="/issuers">
      <Issuers {issuers} mayCreate={mayCreateIssuer} institutionName={institution.name}/>
    </Route>
    <Route path="/groups">
      <Faculties {faculties} mayCreate={mayCreateFaculty} institutionName={institution.name}/>
    </Route>
    <Route path="/user-management/invite-new-user">
      <InviteUser
          permissionsRoles={permissionsRoles}
          disabledRole={true}
          entityId={entityId}
          contentType={contentType}
      />
    </Route>
    <Route path="/user-management">
      <InstitutionUserManagement entity={entityType.INSTITUTION} />
    </Route>
  </Router>
{/if}

