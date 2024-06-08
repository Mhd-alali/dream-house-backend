import { prisma } from '../prisma/db.js';
export const getProperty = async (req, res) => {
    const { id } = req.params;
    const property = await prisma.property.findUnique({
        where: {
            id
        },
        include: {
            image: {
                select: {
                    image: true
                }
            }
        }
    });
    return res.status(200).send(property);
};

export const getProperties = async (req, res) => {
    const { count, property_type } = req.query;
    const properties = await prisma.property.findMany({
        where: {
            type: property_type
        },
        take: +count,
        include: {
            image: {
                select: {
                    image: true
                }
            }
        }
    });

    return res.status(200).send(properties);
};