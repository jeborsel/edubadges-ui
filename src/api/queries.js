export const headerEntity = `
	entityId,
	name,
	descriptionEnglish,
	descriptionDutch,
	createdAt
`;

export const headerStaff = `
	staff {
    	user { 
			firstName, 
			lastName,
			email,
			entityId
		}
  }
`;

export const studentBadgeInstances = `query {
    badgeInstances {
      entityId,
      image,
      issuedOn,
      createdAt,
      public,
      revoked,
      expiresAt,
      acceptance,
      badgeclass {
        name,
        entityId,
        image,
        extensions {
          name,
          originalJson
        },
        issuer {
          name,
          image,
          faculty {
            name
          }
        }
      }
    }
  }`;

export const enrollmentsQuery = `
    badgeClass(id: $entityId) {
      pendingEnrollments {
        dateCreated,
        dateAwarded,
        denied,
        entityId,
        user {
          entityId,
          firstName,
          lastName,
          email
        }
      }
    }
  `;

export const assertionsQuery = `
    badgeClass(id: $entityId) {
      badgeAssertions {
        entityId,
        createdAt,
        updatedAt,
        revoked,
        acceptance,
        expiresAt,
        issuedOn,
        user {
          entityId,
          firstName,
          lastName,
          email
        }
      }
    }
  `;
