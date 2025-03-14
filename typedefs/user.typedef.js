
export const userTypedefs = `#graphql
    type User {
        id: ID!
        name: String!
        surname: String!
        cell_number: String!
        gender: gender!
        date_of_birth: String!
        picture: String
        address: Address!
        next_of_kin: Relative!
        role: Role!
        complains: Complain
        room_number: String!
        lease_information: String
        status: profileStatus
    }
    type profileStatus{
        code: StatusCode
        reason: String
    }
    input profileStatusInput{
        code: StatusCode
        reason: String
    }
    enum  StatusCode {
        ACCEPTED
        PENDING
        REJECTED
    }
    type Address {
        str_name: String!
        city: String!
        code: String!
        suburb: String!
    }
    input AddressInput {
        str_name: String!
        city: String!
        code: String!
        suburb: String!
    }
    type Complain {
        subject: String
        Description: String
    }
    input ComplainInput {
        subject: String
        Description: String
    }
    enum Role {
        ADMIN
        TENANT
    }

    type Relative{
        name: String!
        surname: String!
        relationship: Relationship!
        cell_number: String!
    }
    input RelativeInput {
        name: String!
        surname: String!
        relationship: Relationship!
        cell_number: String!
    }

    enum Relationship {
        SISTER 
        COUSIN
        BROTHER
        MOTHER
        FATHER
        AUNT 
        UNCLE
        FRIEND
        GRANDFATHER
        GRANDMOTHER
        PARTNER
        WIFE
        HUSBAND
    }
    enum gender {
        MALE 
        FEMALE
    }



    type User_Results {
        success: Boolean!
        status: Int!
        message: String!
        user: User
        users: [User]
    }

    type Query {
        get_users: User_Results!
        get_user(id: ID!): User_Results
    }

    input createUserInput {
        id: ID!
        name: String!
        surname: String!
        cell_number: String!
        gender: gender!
        date_of_birth: String!
        picture: String
        address: AddressInput!
        next_of_kin: RelativeInput!
        role: Role!
        complains: ComplainInput
        room_number: String!
        lease_information: String
        status: profileStatusInput
    }
    type Mutation {
        create_user(input: createUserInput): User_Results
    }
`