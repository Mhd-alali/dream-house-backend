-- CreateTable
CREATE TABLE "property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "occupancy" INTEGER NOT NULL,
    "price" REAL
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,
    CONSTRAINT "images_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "property_name_key" ON "property"("name");

-- CreateIndex
CREATE UNIQUE INDEX "images_propertyID_key" ON "images"("propertyID");
