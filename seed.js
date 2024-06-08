import { prisma } from "./prisma/db.js";

async function seed() {
    const data = [
        {
            name: 'Sunny House',
            area: 'Miami Beach',
            type: 'houses',
            description: 'A beautiful house with stunning ocean views and private beach access.',
            occupancy: 8,
            price:35000.00,
            image: {
                create: {
                    image: "house-1.jpg"
                }
            }
        },
        {
            name: 'Beach House Malibu',
            area: 'Malibu',
            type: 'houses',
            description: 'A luxurious house with a private pool and stunning beach views.',
            occupancy: 10,
            price:38000.00,
            image: {
                create: {
                    image: "house-2.webp"
                }
            }
        },
        {
            name: 'Suburban House',
            area: 'Palo Alto',
            type: 'houses',
            description: 'A charming house in a quiet suburban neighborhood, perfect for families.',
            occupancy: 5,
            price:27000.00,
            image: {
                create: {
                    image: "house-3.webp"
                }
            }
        },
        {
            name: 'Mountain View House',
            area: 'Aspen',
            type: 'houses',
            description: 'A cozy house with breathtaking mountain views, ideal for a winter retreat.',
            occupancy: 6,
            price:25000.00,
            image: {
                create: {
                    image: "house-4.jpg"
                }
            }
        },
        {
            name: 'Historic House',
            area: 'Savannah',
            type: 'houses',
            description: 'A beautifully restored historic house in the heart of Savannah.',
            occupancy: 4,
            price:40000.00,
            image: {
                create: {
                    image: "house-5.jpg"
                }
            }
        },
        {
            name: 'Lakeside House',
            area: 'Lake Tahoe',
            type: 'houses',
            description: 'A modern house with stunning lakeside views and private dock access.',
            occupancy: 7,
            price:37000.00,
            image: {
                create: {
                    image: "house-6.webp"
                }
            }
        },
        {
            name: 'Downtown Loft',
            area: 'New York City',
            type: 'apartments',
            description: 'A modern loft in the heart of the city, close to all major attractions.',
            occupancy: 4,
            price:19000.00,
            image: {
                create: {
                    image: "apartment-1.jpg"
                }
            }
        },
        {
            name: 'High-Rise Apartment',
            area: 'Chicago',
            type: 'apartments',
            description: 'A luxurious high-rise apartment with stunning city views.',
            occupancy: 3,
            price:18000.00,
            image: {
                create: {
                    image: "apartment-2.webp"
                }
            }
        },
        {
            name: 'Beachside Apartment',
            area: 'Santa Monica',
            type: 'apartments',
            description: 'A cozy apartment just steps away from the beach, perfect for relaxation.',
            occupancy: 2,
            price:25000.00,
            image: {
                create: {
                    image: "apartment-3.jpg"
                }
            }
        },
        {
            name: 'Penthouse Suite',
            area: 'Los Angeles',
            type: 'apartments',
            description: 'An upscale penthouse suite with panoramic views of the city.',
            occupancy: 5,
            price:22000.00,
            image: {
                create: {
                    image: "apartment-4.jpg"
                }
            }
        },
        {
            name: 'Historic Apartment',
            area: 'Boston',
            type: 'apartments',
            description: 'A charming apartment in a historic building, full of character and charm.',
            occupancy: 3,
            price:23000.00,
            image: {
                create: {
                    image: "apartment-5.jpg"
                }
            }
        },
        {
            name: 'Modern Apartment',
            area: 'San Francisco',
            type: 'apartments',
            description: 'A sleek and modern apartment located in the bustling downtown area.',
            occupancy: 4,
            price:28000.00,
            image: {
                create: {
                    image: "apartment-6.jpg"
                }
            }
        },
        {
            name: 'Organic Farm',
            area: 'Napa Valley',
            type: 'farms',
            description: 'An organic farm with rolling hills and vineyards.',
            occupancy: 6,
            price:50000.00,
            image: {
                create: {
                    image: "farm-1.jpg"
                }
            }
        },
        {
            name: 'Countryside Farm',
            area: 'Lake District',
            type: 'farms',
            description: 'A charming farm surrounded by nature, ideal for a peaceful retreat.',
            occupancy: 5,
            price:46000.00,
            image: {
                create: {
                    image: "farm-2.jpg"
                }
            }
        }, {
            name: 'Sunny Acres Farm',
            area: 'San Francisco',
            type: "farms",
            description: 'A picturesque farm with rolling hills and sunny fields, perfect for growing crops.',
            occupancy: 5,
            price:39000.00,
            image: {
                create: {
                    image: "farm-3.jpg"
                }
            }
        },
        {
            name: 'Green Valley Farm',
            area: 'San Francisco',
            type: "farms",
            description: 'An eco-friendly farm nestled in a lush green valley, specializing in organic produce.',
            occupancy: 3,
            price:56000.00,
            image: {
                create: {
                    image: "farm-4.jpg"
                }
            }
        },
        {
            name: 'Happy Harvest Farm',
            area: 'Santa Monic',
            type: "farms",
            description: 'A family-owned farm known for its friendly atmosphere and bountiful harvests.',
            occupancy: 6,
            price:52000.00,
            image: {
                create: {
                    image: "farm-5.jpg"
                }
            }
        },
        {
            name: 'Golden Fields Farm',
            area: 'New York City',
            type: "farms",
            description: 'Vast golden fields stretching as far as the eye can see, providing ample space for agricultural activities.',
            occupancy: 8,
            price:45000.00,
            image: {
                create: {
                    image: "farm-6.jpg"
                }
            }
        },
    ];
    data.forEach(async (dat) => {
        await prisma.property.create({
            data:dat
        });
    });

}

seed();