const services = [
    {
        key: "001",
        name: "Beginner",
        season: "Year-Round",
        price: "$50 per month",
        duration: "60 min",
        info: "For players working at the beginning of their soccer journey",
        details: "For players working at the beginning of their soccer journey, work focuses on ball control and understanding the game. This is the perfect class for recreational players that want to learn ball control and skills in addition to their practices.",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    },
    {
        key: "002",
        name: "Developmental",
        season: "Year-Round",
        price: "$50 per month",
        duration: "60 min",
        info: "The perfect class for 7-11 year old players ready to further their soccer experience by increasing their skills.",
        details: "The perfect class for 7-11 year old players ready to further their soccer experience by increasing their skills.  Class work will focus on first touch, ball striking and passing to make sure that every player has a sound solid technical foundation of skills. ",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    },

    {
        key: "003",
        name: "Junior Elite",
        season: "Year-Round",
        price: "$60 per month",
        duration: "60 min",
        info: "For Middle School aged players that are currently playing at advanced levels.",
        details: "This class is designed for players that have a solid foundation of basic skills and have been playing select soccer for several years.  Players approximately 11-14 years old who are wanting to better understand the game and are looking to challenge themselves to learn more advanced technical skills will benefit from this training session.",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    },
    {
        key: "004",
        name: "Holiday Camp",
        season: "Winter and Summer Break",
        price: "$50 per season",
        duration: "90 min",
        info: "For boys & girls of all ages, abilities & experience",
        details: "For players want to spend their holiday break leaning basics of football. The training is focuses on ball control and understanding the game. This is the perfect class for recreational players that want to learn ball control and skills in addition to their practices.",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    },
    {
        key: "005",
        name: "Elite",
        season: "Year-Round",
        price: "$90 per month",
        duration: "90 min",
        info: "High-level training for the serious players only.",
        details: " High-level training for the serious players only. Includes technical, tactical, strength, conditioning, and agility. Prepares players for high level conditions and games.",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    },

    {
        key: "006",
        name: "Shooting and Finishing Special Camp",
        season: "Spring, Autumn",
        price: "$100 per week",
        duration: "90 min",
        info: "A special program (8 weeks) for Forwards and Mid-fielders.",
        details: "Master the skills and become soccer's most prized players - A Goal Scorer!",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    },
    {
        key: "007",
        name: "GK Special Camp",
        season: "Spring, Autumn",
        price: "$100 per week",
        duration: "90 min",
        info: "A special program (8 weeks) for Goalkeepers",
        details: "For all things Goalkeeping!  Drills address all areas of development from handling and footwork; diving; breakaways; high balls and crosses; as well as distribution. We train goalkeepers to be accountable, give 100% regardless of the outcome, and how to be leaders on and off the field.",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    },
    {
        key: "008",
        name: "Defending Special Camp",
        season: "Spring, Autumn",
        price: "$100 per month",
        duration: "90 min",
        info: "Special program (8 weeks) for defenders only.",
        details: " A perfect short course to master all the defending skills. Includes drills on tackles, heading, long passes, crosses; as well as heading and clearing.",
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDYzNjI3MzRhOWYzYWYxY2E2YzgwNGFiYmM1MGUzNT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.zP4TN5EDTEq8WbWjKSlss0WL2O8Z3kjLfEiVPgjhUqY"
    }
]

