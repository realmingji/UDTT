
generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "mysql"
    url      = "db-udtt.crzk9emobsh6.us-east-2.rds.amazonaws.com"
  }
  
  
  
  model spot {
    SPOT_ID         Int             @id @default(autoincrement())
    PLACE           String          @db.VarChar(50)
    ridegroup       ridegroup[]
    comment         comment[]
    leader          leader[]
    member          member[]
  
      @@index([SPOT_ID], map: "SPOT_ID")
  }
  
  model user {
    USER_ID         BigInt          @id @default(autoincrement())
    NICKNAME        String?         @unique @db.VarChar(20)
    LOGIN_DATE      DateTime        @updatedAt @db.DateTime(0)
    PASS_PHRASES    String          @db.VarChar(255)
    TOKEN_EXPIRES   String          @db.VarChar(255)
    CREATE_DATE     DateTime        @default(now()) @db.DateTime(0)
    UPDATED_DATE    DateTime?       @updatedAt @db.DateTime(0)
    DELETED_DATE    DateTime?       @default(now()) @db.DateTime(0)
    ridegroup       ridegroup[]
    comment         comment[]
    leader          leader[]
    member          member[]
  
      @@index([USER_ID], map: "USER_ID")
  }
  
  model ridegroup {
    GROUP_ID        BigInt          @unique @default(autoincrement())
    SPOT_ID         Int
    USER_ID         BigInt
    TITLE           String          @db.VarChar(50)
    INFO            String          @db.VarChar(255)
    STATUS          String          @db.VarChar(50)
    START_TIME      DateTime        @db.DateTime(0)
    END_TIME        DateTime        @db.DateTime(0)
    CREATE_DATE     DateTime        @default(now()) @db.DateTime(0)
    UPDATED_DATE    DateTime?       @updatedAt @db.DateTime(0)
    DELETED_DATE    DateTime?       @default(now()) @db.DateTime(0)
    comment         comment[]
    leader          leader[]
    member          member[]
    spot            spot            @relation(fields: [SPOT_ID], references: [SPOT_ID], onDelete: NoAction, onUpdate: NoAction, map: "ridegroup_ibfk_1")
    user            user            @relation(fields: [USER_ID], references: [USER_ID], onDelete: NoAction, onUpdate: NoAction, map: "ridegroup_ibfk_2")
  
    @@index([GROUP_ID], map: "GROUP_ID")
  }
  
  model comment {
    COMMENT_ID      BigInt          @id @default(autoincrement())
    USER_ID         BigInt
    SPOT_ID         Int
    GROUP_ID        BigInt
    CONTENT         String          @db.VarChar(255)
    CREATE_DATE     DateTime        @default(now()) @db.DateTime(0)
    UPDATED_DATE    DateTime?       @updatedAt @db.DateTime(0)
    DELETED_DATE    DateTime?       @default(now()) @db.DateTime(0)
    user            user            @relation(fields: [USER_ID], references: [USER_ID], onDelete: NoAction, onUpdate: NoAction, map: "comment_ibfk_1")
    spot            spot            @relation(fields: [SPOT_ID], references: [SPOT_ID], onDelete: NoAction, onUpdate: NoAction, map: "comment_ibfk_2")
    ridegroup       ridegroup       @relation(fields: [GROUP_ID], references: [GROUP_ID], onDelete: NoAction, onUpdate: NoAction, map: "comment_ibfk_3")
  
    @@index([COMMENT_ID], map: "COMMENT_ID")
  }
  
  
  model leader {
    LEADER_ID       BigInt          @id @default(autoincrement())
    USER_ID         BigInt
    SPOT_ID         Int
    GROUP_ID        BigInt
    CONTENT         String          @db.VarChar(255)
    CREATE_DATE     DateTime        @default(now()) @db.DateTime(0)
    UPDATED_DATE    DateTime?       @updatedAt @db.DateTime(0)
    DELETED_DATE    DateTime?       @default(now()) @db.DateTime(0)
    user            user            @relation(fields: [USER_ID], references: [USER_ID], onDelete: NoAction, onUpdate: NoAction, map: "leader_ibfk_1")
    spot            spot            @relation(fields: [SPOT_ID], references: [SPOT_ID], onDelete: NoAction, onUpdate: NoAction, map: "leader_ibfk_2")
    ridegroup       ridegroup       @relation(fields: [GROUP_ID], references: [GROUP_ID], onDelete: NoAction, onUpdate: NoAction, map: "leader_ibfk_3")
  
    @@index([LEADER_ID], map: "LEADER_ID")
  }
  
  
  model member {
    MEMBER_ID       BigInt          @id @default(autoincrement())
    USER_ID         BigInt
    SPOT_ID         Int
    GROUP_ID        BigInt
    CONTENT         String          @db.VarChar(255)
    CREATE_DATE     DateTime        @default(now()) @db.DateTime(0)
    UPDATED_DATE    DateTime?       @updatedAt @db.DateTime(0)
    DELETED_DATE    DateTime?       @default(now()) @db.DateTime(0)
    user            user            @relation(fields: [USER_ID], references: [USER_ID], onDelete: NoAction, onUpdate: NoAction, map: "member_ibfk_1")
    spot            spot            @relation(fields: [SPOT_ID], references: [SPOT_ID], onDelete: NoAction, onUpdate: NoAction, map: "member_ibfk_2")
    ridegroup       ridegroup       @relation(fields: [GROUP_ID], references: [GROUP_ID], onDelete: NoAction, onUpdate: NoAction, map: "member_ibfk_3")
    
    @@index([MEMBER_ID], map: "MEMBER_ID")
  }
