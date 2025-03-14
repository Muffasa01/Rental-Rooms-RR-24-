export let users = [
    {
        id: "1",
        name: "John",
        surname: "Doe",
        cell_number: "1234567890",
        gender: "MALE",
        date_of_birth: "1990-05-10",
        picture: "https://example.com/images/john.jpg",
        address: {
            str_name: "123 Main Street",
            city: "Johannesburg",
            code: "2001",
            suburb: "Randburg"
        },
        next_of_kin: {
            name: "Jane",
            surname: "Doe",
            relationship: "SISTER",
            cell_number: "0987654321"
        },
        role: "TENANT",
        complains: {
            subject: "Leaking Pipe",
            Description: "The pipe in the bathroom has been leaking for two weeks."
        },
        room_number: "101",
        lease_information: "Lease valid until December 2025.",
        status: {
            code: "ACCEPTED",
            reason: "Good tenant history."
        }
    },
    {
        id: "2",
        name: "Emily",
        surname: "Smith",
        cell_number: "2345678901",
        gender: "FEMALE",
        date_of_birth: "1988-08-15",
        picture: null,
        address: {
            str_name: "456 Elm Street",
            city: "Pretoria",
            code: "0002",
            suburb: "Centurion"
        },
        next_of_kin: {
            name: "Michael",
            surname: "Smith",
            relationship: "BROTHER",
            cell_number: "5678901234"
        },
        role: "ADMIN",
        complains: {
            subject: "Noise Complaint",
            Description: "There have been loud noises from the neighboring unit."
        },
        room_number: "202",
        lease_information: "Lease valid until July 2026.",
        status: {
            code: "PENDING",
            reason: "Verification of documents in process."
        }
    },
    {
        id: "3",
        name: "David",
        surname: "Brown",
        cell_number: "3456789012",
        gender: "MALE",
        date_of_birth: "1992-03-22",
        picture: "https://example.com/images/david.jpg",
        address: {
            str_name: "789 Oak Street",
            city: "Cape Town",
            code: "8001",
            suburb: "Gardens"
        },
        next_of_kin: {
            name: "Sarah",
            surname: "Brown",
            relationship: "WIFE",
            cell_number: "6789012345"
        },
        role: "TENANT",
        complains: {
            subject: "Broken Window",
            Description: "The window in the living room is broken."
        },
        room_number: "303",
        lease_information: "Lease valid until March 2024.",
        status: {
            code: "ACCEPTED",
            reason: "No issues reported."
        }
    },
    {
        id: "4",
        name: "Linda",
        surname: "Johnson",
        cell_number: "4567890123",
        gender: "FEMALE",
        date_of_birth: "1985-11-30",
        picture: null,
        address: {
            str_name: "321 Pine Street",
            city: "Durban",
            code: "4001",
            suburb: "Berea"
        },
        next_of_kin: {
            name: "Robert",
            surname: "Johnson",
            relationship: "HUSBAND",
            cell_number: "7890123456"
        },
        role: "TENANT",
        complains: {
            subject: "Power Outage",
            Description: "No electricity in the apartment for 3 days."
        },
        room_number: "404",
        lease_information: "Lease valid until October 2025.",
        status: {
            code: "PENDING",
            reason: "Waiting for maintenance."
        }
    },
    {
        id: "5",
        name: "James",
        surname: "Wilson",
        cell_number: "5678901234",
        gender: "MALE",
        date_of_birth: "1995-07-14",
        picture: "https://example.com/images/james.jpg",
        address: {
            str_name: "654 Birch Street",
            city: "Port Elizabeth",
            code: "6001",
            suburb: "Summerstrand"
        },
        next_of_kin: {
            name: "Mary",
            surname: "Wilson",
            relationship: "MOTHER",
            cell_number: "8901234567"
        },
        role: "TENANT",
        complains: {
            subject: "Water Heater Issue",
            Description: "The water heater is not working."
        },
        room_number: "505",
        lease_information: "Lease valid until September 2024.",
        status: {
            code: "ACCEPTED",
            reason: "Prompt payment history."
        }
    },
    {
        id: "6",
        name: "Sophia",
        surname: "Martinez",
        cell_number: "6789012345",
        gender: "FEMALE",
        date_of_birth: "1993-12-05",
        picture: null,
        address: {
            str_name: "987 Cedar Street",
            city: "Bloemfontein",
            code: "9301",
            suburb: "Fichardtpark"
        },
        next_of_kin: {
            name: "Carlos",
            surname: "Martinez",
            relationship: "BROTHER",
            cell_number: "9012345678"
        },
        role: "TENANT",
        complains: {
            subject: "Pest Infestation",
            Description: "There are cockroaches in the kitchen."
        },
        room_number: "606",
        lease_information: "Lease valid until November 2025.",
        status: {
            code: "PENDING",
            reason: "Waiting for pest control."
        }
    },
    {
        id: "7",
        name: "Michael",
        surname: "Taylor",
        cell_number: "7890123456",
        gender: "MALE",
        date_of_birth: "1987-04-18",
        picture: "https://example.com/images/michael.jpg",
        address: {
            str_name: "741 Maple Street",
            city: "East London",
            code: "5201",
            suburb: "Vincent"
        },
        next_of_kin: {
            name: "Laura",
            surname: "Taylor",
            relationship: "SISTER",
            cell_number: "0123456789"
        },
        role: "TENANT",
        complains: {
            subject: "Elevator Broken",
            Description: "The elevator has been out of service for a week."
        },
        room_number: "707",
        lease_information: "Lease valid until August 2026.",
        status: {
            code: "ACCEPTED",
            reason: "No complaints in the past."
        }
    },
    {
        id: "8",
        name: "Emma",
        surname: "Anderson",
        cell_number: "8901234567",
        gender: "FEMALE",
        date_of_birth: "1991-09-25",
        picture: null,
        address: {
            str_name: "852 Walnut Street",
            city: "Polokwane",
            code: "0700",
            suburb: "Sterpark"
        },
        next_of_kin: {
            name: "Daniel",
            surname: "Anderson",
            relationship: "FATHER",
            cell_number: "1234509876"
        },
        role: "TENANT",
        complains: {
            subject: "No Hot Water",
            Description: "There is no hot water in the apartment."
        },
        room_number: "808",
        lease_information: "Lease valid until June 2024.",
        status: {
            code: "PENDING",
            reason: "Waiting for plumber."
        }
    },
    {
        id: "9",
        name: "William",
        surname: "Thomas",
        cell_number: "9012345678",
        gender: "MALE",
        date_of_birth: "1989-06-12",
        picture: "https://example.com/images/william.jpg",
        address: {
            str_name: "963 Cherry Street",
            city: "Nelspruit",
            code: "1200",
            suburb: "West Acres"
        },
        next_of_kin: {
            name: "Olivia",
            surname: "Thomas",
            relationship: "WIFE",
            cell_number: "2345609871"
        },
        role: "TENANT",
        complains: {
            subject: "Broken Lock",
            Description: "The front door lock is broken."
        },
        room_number: "909",
        lease_information: "Lease valid until May 2025.",
        status: {
            code: "ACCEPTED",
            reason: "Reliable tenant."
        }
    },
    {
        id: "10",
        name: "Ava",
        surname: "Jackson",
        cell_number: "0123456789",
        gender: "FEMALE",
        date_of_birth: "1994-02-28",
        picture: null,
        address: {
            str_name: "159 Willow Street",
            city: "Kimberley",
            code: "8301",
            suburb: "Heritage Hill"
        },
        next_of_kin: {
            name: "Ethan",
            surname: "Jackson",
            relationship: "BROTHER",
            cell_number: "3456709872"
        },
        role: "TENANT",
        complains: {
            subject: "Faulty Wiring",
            Description: "The lights flicker due to faulty wiring."
        },
        room_number: "1010",
        lease_information: "Lease valid until April 2026.",
        status: {
            code: "PENDING",
            reason: "Waiting for electrician."
        }
    },
    {
        id: "11",
        name: "Liam",
        surname: "White",
        cell_number: "1234509876",
        gender: "MALE",
        date_of_birth: "1996-10-07",
        picture: "https://example.com/images/liam.jpg",
        address: {
            str_name: "357 Oak Street",
            city: "Rustenburg",
            code: "0300",
            suburb: "Boitekong"
        },
        next_of_kin: {
            name: "Sophie",
            surname: "White",
            relationship: "SISTER",
            cell_number: "4567809873"
        },
        role: "TENANT",
        complains: {
            subject: "Noisy Neighbors",
            Description: "The neighbors are loud at night."
        },
        room_number: "1111",
        lease_information: "Lease valid until January 2025.",
        status: {
            code: "ACCEPTED",
            reason: "Good communication."
        }
    },
    {
        id: "12",
        name: "Mia",
        surname: "Harris",
        cell_number: "2345609871",
        gender: "FEMALE",
        date_of_birth: "1997-01-20",
        picture: null,
        address: {
            str_name: "753 Pine Street",
            city: "Pietermaritzburg",
            code: "3201",
            suburb: "Scottsville"
        },
        next_of_kin: {
            name: "Noah",
            surname: "Harris",
            relationship: "BROTHER",
            cell_number: "5678901234"
        },
        role: "TENANT",
        complains: {
            subject: "Clogged Drain",
            Description: "The bathroom drain is clogged."
        },
        room_number: "1212",
        lease_information: "Lease valid until March 2026.",
        status: {
            code: "PENDING",
            reason: "Waiting for plumber."
        }
    },
    {
        id: "13",
        name: "Benjamin",
        surname: "Clark",
        cell_number: "3456709872",
        gender: "MALE",
        date_of_birth: "1986-07-03",
        picture: "https://example.com/images/benjamin.jpg",
        address: {
            str_name: "951 Elm Street",
            city: "George",
            code: "6530",
            suburb: "Pacaltsdorp"
        },
        next_of_kin: {
            name: "Chloe",
            surname: "Clark",
            relationship: "WIFE",
            cell_number: "6789012345"
        },
        role: "TENANT",
        complains: {
            subject: "Broken Stove",
            Description: "The stove is not heating properly."
        },
        room_number: "1313",
        lease_information: "Lease valid until February 2025.",
        status: {
            code: "ACCEPTED",
            reason: "No late payments."
        }
    },
    {
        id: "14",
        name: "Charlotte",
        surname: "Lewis",
        cell_number: "4567809873",
        gender: "FEMALE",
        date_of_birth: "1998-04-15",
        picture: null,
        address: {
            str_name: "258 Birch Street",
            city: "Witbank",
            code: "1035",
            suburb: "Highveld"
        },
        next_of_kin: {
            name: "Lucas",
            surname: "Lewis",
            relationship: "BROTHER",
            cell_number: "7890123456"
        },
        role: "TENANT",
        complains: {
            subject: "Leaking Roof",
            Description: "The roof leaks during heavy rain."
        },
        room_number: "1414",
        lease_information: "Lease valid until December 2024.",
        status: {
            code: "PENDING",
            reason: "Waiting for roofer."
        }
    },
    {
        id: "15",
        name: "Elijah",
        surname: "Walker",
        cell_number: "5678901234",
        gender: "MALE",
        date_of_birth: "1999-08-22",
        picture: "https://example.com/images/elijah.jpg",
        address: {
            str_name: "654 Cedar Street",
            city: "Potchefstroom",
            code: "2531",
            suburb: "Baillie Park"
        },
        next_of_kin: {
            name: "Ella",
            surname: "Walker",
            relationship: "SISTER",
            cell_number: "8901234567"
        },
        role: "TENANT",
        complains: {
            subject: "Broken Fridge",
            Description: "The fridge is not cooling."
        },
        room_number: "1515",
        lease_information: "Lease valid until October 2025.",
        status: {
            code: "ACCEPTED",
            reason: "Responsible tenant."
        }
    },
    {
        id: "16",
        name: "Amelia",
        surname: "Hall",
        cell_number: "6789012345",
        gender: "FEMALE",
        date_of_birth: "1990-11-10",
        picture: null,
        address: {
            str_name: "852 Maple Street",
            city: "Vereeniging",
            code: "1930",
            suburb: "Arcon Park"
        },
        next_of_kin: {
            name: "James",
            surname: "Hall",
            relationship: "HUSBAND",
            cell_number: "9012345678"
        },
        role: "TENANT",
        complains: {
            subject: "Faulty Air Conditioner",
            Description: "The air conditioner is not working."
        },
        room_number: "1616",
        lease_information: "Lease valid until September 2026.",
        status: {
            code: "PENDING",
            reason: "Waiting for technician."
        }
    },
    {
        id: "17",
        name: "Lucas",
        surname: "Allen",
        cell_number: "7890123456",
        gender: "MALE",
        date_of_birth: "1984-03-17",
        picture: "https://example.com/images/lucas.jpg",
        address: {
            str_name: "753 Walnut Street",
            city: "Klerksdorp",
            code: "2571",
            suburb: "Flamwood"
        },
        next_of_kin: {
            name: "Grace",
            surname: "Allen",
            relationship: "WIFE",
            cell_number: "0123456789"
        },
        role: "TENANT",
        complains: {
            subject: "Broken Door",
            Description: "The bedroom door is broken."
        },
        room_number: "1717",
        lease_information: "Lease valid until November 2024.",
        status: {
            code: "ACCEPTED",
            reason: "No issues reported."
        }
    },
    {
        id: "18",
        name: "Harper",
        surname: "Young",
        cell_number: "8901234567",
        gender: "FEMALE",
        date_of_birth: "1993-06-29",
        picture: null,
        address: {
            str_name: "159 Cherry Street",
            city: "Sasolburg",
            code: "1947",
            suburb: "Zamdela"
        },
        next_of_kin: {
            name: "Henry",
            surname: "Young",
            relationship: "BROTHER",
            cell_number: "1234509876"
        },
        role: "TENANT",
        complains: {
            subject: "Faulty Lights",
            Description: "The lights in the hallway are not working."
        },
        room_number: "1818",
        lease_information: "Lease valid until August 2025.",
        status: {
            code: "PENDING",
            reason: "Waiting for electrician."
        }
    },
    {
        id: "19",
        name: "Alexander",
        surname: "King",
        cell_number: "9012345678",
        gender: "MALE",
        date_of_birth: "1982-12-01",
        picture: "https://example.com/images/alexander.jpg",
        address: {
            str_name: "357 Willow Street",
            city: "Welkom",
            code: "9460",
            suburb: "Riebeeckstad"
        },
        next_of_kin: {
            name: "Lily",
            surname: "King",
            relationship: "WIFE",
            cell_number: "2345609871"
        },
        role: "TENANT",
        complains: {
            subject: "Noisy Elevator",
            Description: "The elevator makes loud noises."
        },
        room_number: "1919",
        lease_information: "Lease valid until July 2026.",
        status: {
            code: "ACCEPTED",
            reason: "Good tenant history."
        }
    },
    {
        id: "20",
        name: "Evelyn",
        surname: "Wright",
        cell_number: "0123456789",
        gender: "FEMALE",
        date_of_birth: "1995-09-14",
        picture: null,
        address: {
            str_name: "753 Birch Street",
            city: "Queenstown",
            code: "5320",
            suburb: "Hillside"
        },
        next_of_kin: {
            name: "Oliver",
            surname: "Wright",
            relationship: "BROTHER",
            cell_number: "3456709872"
        },
        role: "TENANT",
        complains: {
            subject: "Faulty Thermostat",
            Description: "The thermostat is not regulating temperature."
        },
        room_number: "2020",
        lease_information: "Lease valid until June 2025.",
        status: {
            code: "PENDING",
            reason: "Waiting for technician."
        }
    }
];