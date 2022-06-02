import * as Convoy from './dist/index.js';

const convoy = new Convoy();
// convoy();

// async function main() {
//     try {
//         const convoy = new Convoy({
//             app_token: "CO.sOlla6ENW0ewBTvi.XCM3GLLOkC1WNffJqNYhPTc85a1IETJBiN4Jc0o6sB355wDQfXAvMhL8IxwVmfjR",
//             uri: "http://localhost:5005",
//         });

//         const application = await createApplication(convoy);

//         console.log(`application has been created`, application);

//         const endpoint = await createEndpoint(convoy, application);

//         console.log(`endpoint has been created`, endpoint);

//         const event = await createEvent(convoy, application);

//         console.log(`event has been created`, event);
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function createSubscription() {
//     try {
//         const convoy = new Convoy({
//             app_token: "CO.Z6kRhMJ9WCQvWfMw.0nFfEE6uONEAGzeDZWyjaOQG5pSQ1LpeijidaBOik6KqFItqXXoN2ckKwUyPIsHJ",
//             uri: "http://localhost:5005",
//         });

//         const subscripton = await convoy.appPortal.createEndpoint({
//             name: "test subscription",
//             type: "outgoing",
//             app_id: "1fc65764-0498-46e0-aa17-fb9b180604a6",
//             source_id: "46b0cef2-45af-4468-9507-9acac00fcf0a",
//             endpoint_id: "13fa169a-145f-4dfb-b5a6-0fa95a9473df",
//             group_id: "ae5fd826-9423-41fb-98b5-f44b263fb689",
//         });
//         console.log("🚀 ~ file: index.js ~ line 35 ~ createSubscription ~ subscripton", subscripton);

//         return subscripton;
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function createApplication(convoy) {
//     try {
//         const application = await convoy.applications.create({
//             name: "convoy js1 demo application",
//             support_email: "dotunjolaosho@gmail.com",
//         });

//         return application;
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function showPortal() {
//     const convoy = new Convoy({
//         app_token: "CO.Z6kRhMJ9WCQvWfMw.0nFfEE6uONEAGzeDZWyjaOQG5pSQ1LpeijidaBOik6KqFItqXXoN2ckKwUyPIsHJ",
//         uri: "http://localhost:5005",
//     });
//     convoy.appPortal.appPortal({ selector: "body", style: "" });
// }

// async function createEndpoint(convoy, application) {
//     try {
//         const appID = application.data.uid;

//         const endpointData = {
//             url: "https://webhook.site/e45d9652-89c9-4a86-8cf5-7d83cca080b8",
//             description: "convoy js demo client",
//             events: ["*"],
//         };

//         const endpoint = await convoy.endpoints.create(appID, endpointData);

//         return endpoint;
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function createEvent(convoy, application) {
//     try {
//         const appID = application.data.uid;

//         const eventData = {
//             app_id: appID,
//             event_type: "payment.success",
//             data: {
//                 event: "payment.success",
//                 data: {
//                     status: "Completed",
//                     description: "Transaction Successful",
//                     userID: "test_user_id808",
//                 },
//             },
//         };

//         const event = await convoy.events.create(eventData);

//         return event;
//     } catch (error) {
//         console.log(error);
//     }
// }

// showPortal();
