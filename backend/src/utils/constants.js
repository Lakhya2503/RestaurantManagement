const userRoleEnums = {
  ADMIN: "admin",
  USER : "user"
}

const AvailbleUserRole = Object.values(userRoleEnums)

const itemCategory = {
  STARTERS : "Starters",
  MAINCOURSE : "Main Course",
  PIZZAANDPASTA : "Pizza & Pasta",
  DESSERTS : "Desserts",
  SALADS : "Salads",
  BIRYANI : "Biryani"
}

const menuCategoryEnums = Object.values(itemCategory)

const orderType = {
    HOMEDELIVERY : "Home Delivery",
    TABLEORDER : "Table Order"
}


const orderStatus = {
  PENDING : "Pending",
  CANCELLED : "Cancelled",
  PREPARING : "Preparing",
  READY : "Ready",
  DELIVERED :  "Delivered"
}


const OrderStatusEnums = Object.values(orderStatus)

const orderTypeEnums = Object.values(orderType)

const userLoginType = {
  GOOGLE : "GOOGLE",
  EMAIL_PASSWORD : "EMAIL_PASSWORD"
}

const AvailbleSocialLogins = Object.values(userLoginType)

const USER_TEMPORARY_TOKEN = 20 * 60 * 1000






export {
  AvailbleUserRole,
  AvailbleSocialLogins,
  USER_TEMPORARY_TOKEN,
  menuCategoryEnums,
  orderTypeEnums,
  OrderStatusEnums
}
