
// ------------------------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
// ------------------------------------------------------------------------------

// WARNING - This file is generated from util-scripts/query-importer.js

import { ISampleQuery } from "../types/query-samples";

export const SampleQueries: ISampleQuery[] = [
  {
    "category": "Getting Started",
    "method": "GET",
    "humanName": "my profile",
    "requestUrl": "/v1.0/me/",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/users",
    "skipTest": false
},
{
    "category": "Getting Started",
    "method": "GET",
    "humanName": "my photo",
    "requestUrl": "/v1.0/me/photo/$value",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/profilephoto_get",
    "skipTest": false
},
{
    "category": "Getting Started",
    "method": "GET",
    "humanName": "my mail",
    "requestUrl": "/v1.0/me/messages",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_messages",
    "skipTest": false
},
{
    "category": "Getting Started",
    "method": "GET",
    "humanName": "all the items in my drive",
    "requestUrl": "/v1.0/me/drive/root/children",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/driveitem-list-children?view=graph-rest-1.0",
    "skipTest": false
},
{
    "category": "Getting Started",
    "method": "GET",
    "humanName": "items trending around me",
    "requestUrl": "/beta/me/insights/trending",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/insights_list_trending",
    "skipTest": false
},
{
    "category": "Getting Started",
    "method": "GET",
    "humanName": "my manager",
    "requestUrl": "/v1.0/me/manager",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_manager",
    "skipTest": false
},
{
    "category": "Users",
    "method": "GET",
    "humanName": "my direct reports",
    "requestUrl": "/v1.0/me/directReports",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_directreports",
    "skipTest": false
},
{
    "category": "Users",
    "method": "GET",
    "humanName": "all users in the organization",
    "requestUrl": "/v1.0/users",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/users",
    "skipTest": false
},
{
    "category": "Users",
    "method": "GET",
    "humanName": "all users in the Finance department",
    "requestUrl": "/v1.0/users?$filter=Department eq 'Finance'",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/users",
    "skipTest": false
},
{
    "category": "Users",
    "method": "GET",
    "humanName": "my skills",
    "requestUrl": "/v1.0/me/?$select=displayName,skills",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user",
    "skipTest": false
},
{
    "category": "Users",
    "method": "GET",
    "humanName": "user by email",
    "requestUrl": "/v1.0/users/{user-mail}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user",
    "skipTest": false
},
{
    "category": "Users",
    "method": "GET",
    "humanName": "all my Planner tasks",
    "requestUrl": "/beta/me/planner/tasks",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/resources/planner_overview",
    "skipTest": false
},
{
    "category": "Users",
    "method": "POST",
    "humanName": "create user",
    "requestUrl": "/v1.0/users",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_post_users",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n        \"accountEnabled\": true,\n        \"city\": \"Seattle\",\n        \"country\": \"United States\",\n        \"department\": \"Sales & Marketing\",\n        \"displayName\": \"Melissa Darrow\",\n        \"givenName\": \"Melissa\",\n        \"jobTitle\": \"Marketing Director\",\n        \"mailNickname\": \"MelissaD\",\n        \"passwordPolicies\": \"DisablePasswordExpiration\",\n        \"passwordProfile\": {\n            \"password\": \"Test1234\",\n            \"forceChangePasswordNextSignIn\": false\n        },\n        \"officeLocation\": \"131/1105\",\n        \"postalCode\": \"98052\",\n        \"preferredLanguage\": \"en-US\",\n        \"state\": \"WA\",\n        \"streetAddress\": \"9256 Towne Center Dr., Suite 400\",\n        \"surname\": \"Darrow\",\n        \"mobilePhone\": \"+1 206 555 0110\",\n        \"usageLocation\": \"US\",\n        \"userPrincipalName\": \"MelissaD@{domain}\"\n    }",
    "skipTest": false
},
{
    "category": "Users",
    "method": "GET",
    "humanName": "track user changes",
    "requestUrl": "/v1.0/users/delta?$select=displayName,givenName,surname",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/concepts/delta_query_users",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "GET",
    "humanName": "all groups in my organization",
    "requestUrl": "/v1.0/groups",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/group",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "GET",
    "humanName": "all groups I belong to",
    "requestUrl": "/v1.0/me/memberOf",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_memberof",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "GET",
    "humanName": "group members",
    "requestUrl": "/v1.0/groups/{group-id}/members",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/group_list_members",
    "tip": "This query requires a group id.  To find the ID of a group you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/memberOf",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "GET",
    "humanName": "group's conversations",
    "requestUrl": "/v1.0/groups/{group-id}/conversations",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/group_list_conversations",
    "tip": "This query requires a group id.  To find the ID of a group you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/memberOf",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "GET",
    "humanName": "group's events",
    "requestUrl": "/v1.0/groups/{group-id}/events",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/group_list_events",
    "tip": "This query requires a group id.  To find the ID of a group you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/memberOf",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "POST",
    "humanName": "add favorite group",
    "requestUrl": "/v1.0/groups/{group-id}/addFavorite",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/group_addfavorite",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "tip": "This query requires a group id.  To find the ID of a group you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/memberOf",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "GET",
    "humanName": "items in a group drive",
    "requestUrl": "/v1.0/groups/{group-id}/drive/root/children",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/drive_get",
    "tip": "This query requires a group id.  To find the ID of a group you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/memberOf",
    "skipTest": false
},
{
    "category": "Groups",
    "method": "GET",
    "humanName": "track group changes",
    "requestUrl": "/v1.0/groups/delta?$select=displayName,description",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/concepts/delta_query_groups",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "my high important mail",
    "requestUrl": "/v1.0/me/messages?$filter=importance eq 'high'",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_messages",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "my mails from an address",
    "requestUrl": "/v1.0/me/messages?$filter=(from/emailAddress/address) eq '{user-mail}'",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_messages",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "my mail that has 'Hello World'",
    "requestUrl": "/v1.0/me/messages?$search=\"hello world\"",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_messages",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "POST",
    "humanName": "send an email",
    "requestUrl": "/v1.0/me/sendMail",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_sendmail",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n        \"message\": {\n            \"subject\": \"Meet for lunch?\",\n            \"body\": {\n                \"contentType\": \"Text\",\n                \"content\": \"The new cafeteria is open.\"\n            },\n            \"toRecipients\": [\n                {\n                    \"emailAddress\": {\n                    \"address\": \"garthf@contoso.com\"\n                    }\n                }\n            ]\n        }}",
    "tip": "Update the Request Body and select Run Query.",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "POST",
    "humanName": "forward mail",
    "requestUrl": "/v1.0/me/messages/{message-id}/forward",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/message_forward",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"comment\": \"FYI\",\n  \"toRecipients\": [\n    {\n      \"emailAddress\": {\n        \"address\": \"{user-mail}\",\n        \"name\": \"Alex Darrow\"\n      }\n    }\n  ]\n}",
    "tip": "This query requires a message id. To get the ID, run the following query, find the message in the response and use its ID property: GET https://graph.microsoft.com/v1.0/me/messages",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "track email changes",
    "requestUrl": "/v1.0/me/mailFolders/Inbox/messages/delta",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/concepts/delta_query_messages",
    "skipTest": false
},
{
    "category": "Outlook Mail (beta)",
    "method": "GET",
    "humanName": "email I'm @ mentioned",
    "requestUrl": "/beta/me/messages?$filter=mentionsPreview/isMentioned eq true&$select=subject,sender,receivedDateTime",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/user_list_messages#request-2",
    "skipTest": false
},
{
    "category": "Outlook Calendar",
    "method": "GET",
    "humanName": "my events for the next week",
    "requestUrl": "/v1.0/me/calendarview?startdatetime={today}&enddatetime={next-week}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_calendarview",
    "skipTest": false
},
{
    "category": "Outlook Calendar",
    "method": "GET",
    "humanName": "all events in my calendar",
    "requestUrl": "/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_events",
    "skipTest": false
},
{
    "category": "Outlook Calendar",
    "method": "GET",
    "humanName": "all my calendars",
    "requestUrl": "/v1.0/me/calendars",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_calendars",
    "skipTest": false
},
{
    "category": "Outlook Calendar",
    "method": "POST",
    "humanName": "find meeting time",
    "requestUrl": "/v1.0/me/findMeetingTimes",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_findmeetingtimes",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n        \"attendees\": [\n            {\n            \"emailAddress\": {\n                \"address\": \"{user-mail}\",\n                \"name\": \"Alex Darrow\"\n            },\n            \"type\": \"Required\"\n            }\n        ],\n        \"timeConstraint\": {\n            \"timeslots\": [\n            {\n            \"start\": {\n                \"dateTime\": \"{today}\",\n                \"timeZone\": \"Pacific Standard Time\"\n                },\n                \"end\": {\n                \"dateTime\": \"{next-week}\",\n                \"timeZone\": \"Pacific Standard Time\"\n                }\n            }\n            ]\n        },\n        \"locationConstraint\": {\n        \"isRequired\": \"false\",\n        \"suggestLocation\": \"true\",\n        \"locations\": [\n            {\n            \"displayName\": \"Conf Room 32/1368\",\n            \"locationEmailAddress\": \"conf32room1368@imgeek.onmicrosoft.com\"\n            }\n        ]\n        },\n        \"meetingDuration\": \"PT1H\"\n        }",
    "tip": "Update the Request Body and select Run Query.",
    "skipTest": false
},
{
    "category": "Outlook Calendar",
    "method": "POST",
    "humanName": "schedule a meeting",
    "requestUrl": "/v1.0/me/events",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_post_events",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n        \"subject\": \"My event\",\n        \"start\": {\n            \"dateTime\": \"{today}\",\n            \"timeZone\": \"UTC\"\n        },\n        \"end\": {\n            \"dateTime\": \"{next-week}\",\n            \"timeZone\": \"UTC\"\n        }\n    }",
    "tip": "Update the Request Body and select Run Query.",
    "skipTest": false
},
{
    "category": "Outlook Calendar",
    "method": "POST",
    "humanName": "add graph community call",
    "requestUrl": "/v1.0/me/events",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_post_events",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"subject\": \"Microsoft Graph Community call\",\n  \"body\": {\n    \"contentType\": \"HTML\",\n    \"content\": \"Call link: https://aka.ms/mmkv1b Submit a question: https://aka.ms/ybuw2i\"\n  },\n  \"start\": {\n      \"dateTime\": \"2018-09-04T08:00:00\",\n      \"timeZone\": \"Pacific Standard Time\"\n  },\n  \"end\": {\n      \"dateTime\": \"2018-09-04T09:00:00\",\n      \"timeZone\": \"Pacific Standard Time\"\n  },\n  \"location\":{\n      \"displayName\":\"Skype for Business\"\n  },\n    \"recurrence\": {\n      \"pattern\": {\n      \"type\": \"relativeMonthly\",\n      \"interval\": 1,\n      \"daysOfWeek\": [ \"Tuesday\" ],\n      \"index\": \"first\"\n    },\n      \"range\": {\n        \"type\": \"noEnd\",\n        \"startDate\": \"2017-08-29\"\n      }\n    }\n}",
    "tip": "Creates the monthly Microsoft Graph community call on your calendar.",
    "skipTest": false
},
{
    "category": "Outlook Calendar",
    "method": "GET",
    "humanName": "track changes on my events for the next week",
    "requestUrl": "/v1.0/me/calendarView/delta?startDateTime={today}&endDateTime={next-week}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/concepts/delta_query_events",
    "tip": "This query uses date and time parameters. Use an ISO 8601 format. For example, \"2017-04-30T19:00:00.0000000\".",
    "skipTest": false
},
{
    "category": "Personal Contacts",
    "method": "GET",
    "humanName": "my contacts",
    "requestUrl": "/v1.0/me/contacts",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_contacts",
    "skipTest": false
},
{
    "category": "Personal Contacts",
    "method": "POST",
    "humanName": "add contact",
    "requestUrl": "/v1.0/me/contacts",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_post_contacts",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n    \"givenName\": \"Pavel\",\n    \"surname\": \"Bansky\",\n    \"emailAddresses\": [\n        {\n        \"address\": \"pavelb@fabrikam.onmicrosoft.com\",\n        \"name\": \"Pavel Bansky\"\n        }\n    ],\n    \"businessPhones\": [\n        \"+1 732 555 0102\"\n    ]\n}",
    "tip": "Update the Request Body and select Run Query.",
    "skipTest": false
},
{
    "category": "OneDrive",
    "method": "GET",
    "humanName": "all the items in my drive",
    "requestUrl": "/v1.0/me/drive/root/children",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/driveitem-list-children?view=graph-rest-1.0",
    "skipTest": false
},
{
    "category": "OneDrive",
    "method": "GET",
    "humanName": "my recent files",
    "requestUrl": "/v1.0/me/drive/recent",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/drive_recent",
    "skipTest": false
},
{
    "category": "OneDrive",
    "method": "GET",
    "humanName": "files shared with me",
    "requestUrl": "/v1.0/me/drive/sharedWithMe",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/drive_sharedwithme",
    "skipTest": false
},
{
    "category": "OneDrive",
    "method": "GET",
    "humanName": "search my OneDrive",
    "requestUrl": "/v1.0/me/drive/root/search(q='finance')?select=name,id,webUrl",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/item_search",
    "skipTest": false
},
{
    "category": "OneDrive",
    "method": "POST",
    "humanName": "create a folder",
    "requestUrl": "/v1.0/me/drive/root/children",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/item_post_children",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"name\": \"New Folder\",\n  \"folder\": { }\n}",
    "tip": "Update the Request Body and select Run Query.",
    "skipTest": false
},
{
    "category": "Excel",
    "method": "POST",
    "humanName": "create session",
    "requestUrl": "/v1.0/me/drive/items/{drive-item-id}/workbook/createSession",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/excel",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{ \"persistChanges\": true }",
    "tip": "This query requires a driveItem id.  To find the ID of the driveItem that corresponds to an Excel Workbook, you can run: GET https://graph.microsoft.com/v1.0/me/drive/root/search(q='.xlsx')?select=name,id,webUrl.",
    "skipTest": false
},
{
    "category": "Excel",
    "method": "GET",
    "humanName": "worksheets in a workbook",
    "requestUrl": "/v1.0/me/drive/items/{drive-item-id}/workbook/worksheets",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/workbook_list_worksheets",
    "tip": "This query requires a driveItem id.  To find the ID of the driveItem that corresponds to an Excel Workbook, you can run: GET https://graph.microsoft.com/v1.0/me/drive/root/search(q='.xlsx')?select=name,id,webUrl.",
    "skipTest": false
},
{
    "category": "Excel",
    "method": "POST",
    "humanName": "add a new worksheet",
    "requestUrl": "/v1.0/me/drive/items/{drive-item-id}/workbook/worksheets/",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/worksheetcollection_add",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"name\": \"My New Sheet\"\n}",
    "tip": "This query requires a driveItem id.  To find the ID of the driveItem that corresponds to an Excel Workbook, you can run: GET https://graph.microsoft.com/v1.0/me/drive/root/search(q='.xlsx')?select=name,id,webUrl.",
    "skipTest": false
},
{
    "category": "Excel",
    "method": "POST",
    "humanName": "calculate loan payment",
    "requestUrl": "/v1.0/me/drive/items/{drive-item-id}/workbook/functions/pmt",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/workbook#functions",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n \"rate\": 0.035,\n \"nper\": 20,\n \"pv\": -2000\n}",
    "tip": "This query requires a driveItem id.  To find the ID of the driveItem that corresponds to an Excel Workbook, you can run: GET https://graph.microsoft.com/v1.0/me/drive/root/search(q='.xlsx')?select=name,id,webUrl.",
    "skipTest": false
},
{
    "category": "Excel",
    "method": "GET",
    "humanName": "used range in worksheet",
    "requestUrl": "/v1.0/me/drive/items/{drive-item-id}/workbook/worksheets('Sheet1')/usedRange",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/worksheet_usedrange",
    "tip": "This query requires a driveItem id.  To find the ID of the driveItem that corresponds to an Excel Workbook, you can run: GET https://graph.microsoft.com/v1.0/me/drive/root/search(q='.xlsx')?select=name,id,webUrl.",
    "skipTest": false
},
{
    "category": "Excel",
    "method": "GET",
    "humanName": "tables in worksheet",
    "requestUrl": "/v1.0/me/drive/items/{drive-item-id}/workbook/worksheets/Sheet1/tables",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/worksheet_list_tables",
    "tip": "This query requires a driveItem id.  To find the ID of the driveItem that corresponds to an Excel Workbook, you can run: GET https://graph.microsoft.com/v1.0/me/drive/root/search(q='.xlsx')?select=name,id,webUrl.",
    "skipTest": false
},
{
    "category": "Excel",
    "method": "GET",
    "humanName": "charts in worksheet",
    "requestUrl": "/v1.0/me/drive/items/{drive-item-id}/workbook/worksheets('Sheet1')/charts",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/worksheet_list_charts",
    "tip": "This query requires a driveItem id.  To find the ID of the driveItem that corresponds to an Excel Workbook, you can run: GET https://graph.microsoft.com/v1.0/me/drive/root/search(q='.xlsx')?select=name,id,webUrl.",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "all Planner plans associated with a group",
    "requestUrl": "/v1.0/groups/{group-id-with-plan}/planner/plans",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannergroup_list_plans",
    "tip": "This query requires a group id.  To find the ID of a group you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/memberOf",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "Planner plan",
    "requestUrl": "/v1.0/planner/plans/{plan-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannerplan_get",
    "tip": "This query requires a plan id.  To find the ID of the plan you can run: GET https://graph.microsoft.com/v1.0/me/groups/{group-id}/plans.",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "PATCH",
    "humanName": "update a Planner plan",
    "requestUrl": "/v1.0/planner/plans/{plan-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannerplan_update",
    "headers": [
        {
            "name": "If-Match",
            "value": "{if-match}"
        }
    ],
    "postBody": "{\n    \"title\": \"Updated plan title\"\n}",
    "tip": "This query requires a Plan ID and value of @odata.etag for a selected task. To find the ID of the Plan, you can run: GET https://graph.microsoft.com/v1.0/me/planner/tasks. To get the @odata.etag, run: GET https://graph.microsoft.com/v1.0/planner/plans/{plan-id}",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "all buckets in Planner plan",
    "requestUrl": "/v1.0/planner/plans/{plan-id}/buckets",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannerplan_list_buckets",
    "tip": "This query requires a plan id.  To find the ID of the plan you can run: GET https://graph.microsoft.com/v1.0/me/groups/{group-id}/plans.",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "POST",
    "humanName": "create a bucket in Planner plan",
    "requestUrl": "/v1.0/planner/buckets",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/planner_post_buckets",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"name\": \"{bucket-name}\",\n  \"planId\": \"{plan-id}\",\n  \"orderHint\": \" !\"\n}",
    "tip": "This query requires a Plan id.  To find the ID of the Plan you can run: GET https://graph.microsoft.com/v1.0/me/planner/plans",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "PATCH",
    "humanName": "update a bucket in Planner plan",
    "requestUrl": "/v1.0/planner/buckets/{bucket-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannerbucket_update",
    "headers": [
        {
            "name": "If-Match",
            "value": "{if-match}"
        }
    ],
    "postBody": "{\n    \"name\": \"Updated bucket name\"\n}",
    "tip": "This query requires a bucket id and value of @odata.etag for a selected bucket.  To find the ID of the bucket run: GET https://graph.microsoft.com/v1.0/planner/plans/{plan-id}/buckets and then run: GET https://graph.microsoft.com/v1.0/planner/buckets/{bucket-id} to discover @odata.etag",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "all Planner tasks for a plan",
    "requestUrl": "/v1.0/planner/plans/{plan-id}/tasks",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannerplan_list_tasks",
    "tip": "This query requires a plan id.  To find the ID of the plan you can run: GET https://graph.microsoft.com/v1.0/me/groups/{group-id}/plans.",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "all my Planner tasks",
    "requestUrl": "/v1.0/me/planner/tasks",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/planner_overview",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "all Planner tasks for user",
    "requestUrl": "/v1.0/users/{coworker-mail}/planner/tasks",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/planneruser_list_tasks",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "Planner task by id",
    "requestUrl": "/v1.0/planner/tasks/{task-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannertask_get",
    "tip": "This query requires a task id.  To find the ID of the task you can run: GET https://graph.microsoft.com/v1.0/me/planner/tasks",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "POST",
    "humanName": "create a Planner task",
    "requestUrl": "/v1.0/planner/tasks",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/planner_post_tasks",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"planId\": \"{plan-id}\",\n  \"title\": \"{task-title}\",\n  \"assignments\": {}\n}",
    "tip": "This query requires a Plan id.  To find the ID of the Plan you can run: GET https://graph.microsoft.com/v1.0/me/planner/tasks",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "PATCH",
    "humanName": "update a Planner task",
    "requestUrl": "/v1.0/planner/tasks/{task-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannertask_update",
    "headers": [
        {
            "name": "If-Match",
            "value": "{if-match}"
        }
    ],
    "postBody": "{\n    \"title\": \"Updated task title\"\n}",
    "tip": "This query requires a task id and value of @odata.etag for a selected task.  To find the ID of the task and @odata.etag you can run: GET https://graph.microsoft.com/v1.0/me/planner/tasks",
    "skipTest": false
},
{
    "category": "Planner",
    "method": "GET",
    "humanName": "details for Planner task",
    "requestUrl": "/v1.0/planner/tasks/{task-id}/details",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/plannertaskdetails_get",
    "tip": "This query requires a task id.  To find the ID of the task you can run: GET https://graph.microsoft.com/v1.0/me/planner/tasks",
    "skipTest": false
},
{
    "category": "Insights",
    "method": "GET",
    "humanName": "my recent files",
    "requestUrl": "/v1.0/me/drive/recent",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/drive_recent",
    "skipTest": false
},
{
    "category": "Insights (beta)",
    "method": "GET",
    "humanName": "items trending around me",
    "requestUrl": "/beta/me/insights/trending",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/insights_list_trending",
    "skipTest": false
},
{
    "category": "Insights (beta)",
    "method": "GET",
    "humanName": "items shared with me",
    "requestUrl": "/beta/me/insights/shared",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/insights_list_shared",
    "skipTest": false
},
{
    "category": "Insights (beta)",
    "method": "GET",
    "humanName": "items viewed and modified by me",
    "requestUrl": "/beta/me/insights/used",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/insights_list_used",
    "skipTest": false
},
{
    "category": "People",
    "method": "GET",
    "humanName": "people I work with",
    "requestUrl": "/v1.0/me/people",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_people",
    "skipTest": false
},
{
    "category": "People",
    "method": "GET",
    "humanName": "people whose name starts with J",
    "requestUrl": "/v1.0/me/people/?$search=j",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/person_get",
    "skipTest": false
},
{
    "category": "People",
    "method": "GET",
    "humanName": "people relevant to a topic",
    "requestUrl": "/v1.0/me/people/?$search=\"topic: contoso\"",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/person_get",
    "skipTest": false
},
{
    "category": "Extensions",
    "method": "GET",
    "humanName": "get an open extension",
    "requestUrl": "/v1.0/me?$select=id,displayName,mail,mobilePhone&$expand=extensions",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/opentypeextension",
    "skipTest": false
},
{
    "category": "Extensions",
    "method": "POST",
    "humanName": "create an open extension",
    "requestUrl": "/v1.0/me/extensions",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/opentypeextension_post_opentypeextension",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"@odata.type\":\"microsoft.graph.openTypeExtension\",    \"extensionName\":\"com.contoso.roamingSettings\",\n    \"theme\":\"dark\",\n    \"color\":\"purple\",\n    \"lang\":\"Japanese\"\n}",
    "skipTest": false
},
{
    "category": "Extensions",
    "method": "PATCH",
    "humanName": "update an open extension",
    "requestUrl": "/v1.0/me/extensions/{extension-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/opentypeextension_update",
    "postBody": "{\n    \"theme\":\"light\",\n    \"color\":\"yellow\",\n    \"lang\":\"Swahili\"\n}",
    "skipTest": false
},
{
    "category": "Extensions",
    "method": "GET",
    "humanName": "get available schema extensions",
    "requestUrl": "/v1.0/schemaExtensions",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/schemaextension_post_schemaextensions",
    "skipTest": false
},
{
    "category": "Extensions",
    "method": "GET",
    "humanName": "filter groups by extension property value",
    "requestUrl": "/v1.0/groups?$filter=adatumisv_courses/id eq '123'&$select=id,displayName,adatumisv_courses",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/schemaextension_post_schemaextensions",
    "skipTest": false
},
{
    "category": "Extensions",
    "method": "POST",
    "humanName": "create a group with extension data",
    "requestUrl": "/v1.0/groups",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/schemaextension_post_schemaextensions",
    "postBody": "{\n    \"displayName\": \"Extensions sample group\",\n    \"description\": \"Extensions sample group\",\n    \"groupTypes\": [\"Unified\"],\n    \"mailEnabled\": true,\n    \"mailNickname\": \"extSample123\",\n    \"securityEnabled\": false,\n    \"adatumisv_courses\": {\n        \"id\":\"123\",\n        \"name\":\"New Managers\",\n        \"type\":\"Online\"\n    }\n}",
    "skipTest": false
},
{
    "category": "Extensions",
    "method": "PATCH",
    "humanName": "update a group with extension data",
    "requestUrl": "/v1.0/groups/{group-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/schemaextension_post_schemaextensions",
    "postBody": "{\n   \"adatumisv_courses\": {\n        \"id\":\"123\",\n        \"name\":\"New Managers\",\n        \"type\":\"Online\"\n    }\n}",
    "skipTest": false
},
{
    "category": "OneNote",
    "method": "GET",
    "humanName": "my notebooks",
    "requestUrl": "/v1.0/me/onenote/notebooks",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/onenote",
    "skipTest": false
},
{
    "category": "OneNote",
    "method": "GET",
    "humanName": "my sections",
    "requestUrl": "/v1.0/me/onenote/sections",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/section",
    "skipTest": false
},
{
    "category": "OneNote",
    "method": "GET",
    "humanName": "my pages",
    "requestUrl": "/v1.0/me/onenote/pages",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/section_list_pages",
    "skipTest": false
},
{
    "category": "OneNote",
    "method": "POST",
    "humanName": "create notebook",
    "requestUrl": "/v1.0/me/onenote/notebooks",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/onenote_post_notebooks",
    "postBody": "{\n  \"displayName\": \"My Notebook\"\n}",
    "tip": "Update the Request Body and select Run Query.",
    "skipTest": false
},
{
    "category": "OneNote",
    "method": "POST",
    "humanName": "create section",
    "requestUrl": "/v1.0/me/onenote/notebooks/{notebook-id}/sections",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/notebook_post_sections",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"displayName\": \"Section 1\"\n}",
    "tip": "This query requires a notebook id.  To find the ID, you can run: GET https://graph.microsoft.com/v1.0/me/onenote/notebooks. ",
    "skipTest": false
},
{
    "category": "OneNote",
    "method": "POST",
    "humanName": "create page",
    "requestUrl": "/v1.0/me/onenote/sections/{section-id}/pages",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/section_post_pages",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/xhtml+xml"
        }
    ],
    "postBody": "\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>A page with a block of HTML</title>\n  </head>\n  <body>\n    <p>This page contains some <i>formatted</i> <b>text</b>.</p>\n  </body>\n</html>",
    "tip": "This query requires a section id.  To find the ID, you can run: GET https://graph.microsoft.com/v1.0/me/onenote/sections.",
    "skipTest": false
},
{
    "category": "SharePoint Sites",
    "method": "GET",
    "humanName": "my organization's default SharePoint site",
    "requestUrl": "/v1.0/sites/root",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/site_get",
    "skipTest": false
},
{
    "category": "SharePoint Sites",
    "method": "GET",
    "humanName": "Enumerate the document libraries under the root site",
    "requestUrl": "/v1.0/sites/root/drives",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/drive_list#list-a-sites-drives",
    "skipTest": false
},
{
    "category": "SharePoint Sites",
    "method": "GET",
    "humanName": "SharePoint site based on relative path of the site",
    "requestUrl": "/v1.0/sites/{host-name}:/{server-relative-path}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/site_getbypath",
    "skipTest": false
},
{
    "category": "SharePoint Sites",
    "method": "GET",
    "humanName": "Search for a SharePoint site by keyword",
    "requestUrl": "/v1.0/sites?search=contoso",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/site_search",
    "skipTest": false
},
{
    "category": "SharePoint Sites",
    "method": "GET",
    "humanName": "Enumerate subsites of the root site",
    "requestUrl": "/v1.0/sites/root/sites",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/site_list_subsites",
    "skipTest": false
},
{
    "category": "SharePoint Sites",
    "method": "GET",
    "humanName": "Enumerate site columns of the root site",
    "requestUrl": "/v1.0/sites/root/columns",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/site_list_columns",
    "skipTest": false
},
{
    "category": "SharePoint Sites",
    "method": "GET",
    "humanName": "Enumerate site content types of the root site",
    "requestUrl": "/v1.0/sites/root/contentTypes",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/site_list_contenttypes",
    "skipTest": false
},
{
    "category": "SharePoint Lists",
    "method": "GET",
    "humanName": "Enumerate the lists in the root site",
    "requestUrl": "/v1.0/sites/root/lists",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/list_list",
    "skipTest": false
},
{
    "category": "SharePoint Lists",
    "method": "GET",
    "humanName": "Enumerate list columns",
    "requestUrl": "/v1.0/sites/root/lists/{list-id}/columns",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/list_list_columns",
    "skipTest": false
},
{
    "category": "SharePoint Lists",
    "method": "GET",
    "humanName": "Enumerate list content types",
    "requestUrl": "/v1.0/sites/root/lists/{list-id}/contentTypes",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/list_list_contenttypes",
    "skipTest": false
},
{
    "category": "SharePoint Lists",
    "method": "GET",
    "humanName": "Enumerate the list items in a list",
    "requestUrl": "/v1.0/sites/root/lists/{list-id}/items",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/listitem_list",
    "skipTest": false
},
{
    "category": "SharePoint Lists",
    "method": "GET",
    "humanName": "Enumerate list items with specific column values",
    "requestUrl": "/v1.0/sites/root/lists/{list-id}/items?$filter=fields/Title eq '{list-title}'",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/listitem_list",
    "headers": [
        {
            "name": "Prefer",
            "value": "allowthrottleablequeries"
        }
    ],
    "skipTest": false
},
{
    "category": "Batching",
    "method": "POST",
    "humanName": "Perform parallel GETs",
    "requestUrl": "/v1.0/$batch",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\"requests\" : [{\"url\" : \"/me?$select=displayName,jobTitle,userPrincipalName\", \"method\" : \"GET\", \"id\" : \"1\"}, {\"url\" : \"/me/messages?$filter=importance eq 'high'&$select=from,subject,receivedDateTime,bodyPreview\", \"method\" : \"GET\", \"id\" : \"2\"}, {\"url\" : \"/me/events\", \"method\" : \"GET\", \"id\" : \"3\"}]  }",
    "tip": "This query shows you how to use batching to get your user information, your messages, and your events.",
    "skipTest": false
},
{
    "category": "Batching",
    "method": "POST",
    "humanName": "Combine a POST and a GET",
    "requestUrl": "/v1.0/$batch",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n \"requests\": [{\n   \"url\": \"/me/drive/root/children\",\n   \"method\": \"POST\",\n   \"id\": \"1\",\n   \"body\": {\n    \"name\": \"TestBatchingFolder\",\n    \"folder\": {}\n   },\n   \"headers\": {\n    \"Content-Type\": \"application/json\"\n   }\n  }, {\n   \"url\": \"/me/drive/root/children/TestBatchingFolder \",\n   \"method\": \"GET\",\n   \"id\": \"2\",\n   \"DependsOn\": [\"1\"]\n  }\n ]\n} ",
    "tip": "This query will create a folder called TestBatchingFolder in your OneDrive and return it back to you via a GET.",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "GET",
    "humanName": "my joined teams",
    "requestUrl": "/v1.0/me/joinedTeams",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_joinedteams",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "GET",
    "humanName": "members of a team",
    "requestUrl": "/v1.0/groups/{group-id-for-teams}/members",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/group_list_memberof",
    "tip": "This query requires a group id of the Team.  To find the group id of teams you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/joinedTeams",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "GET",
    "humanName": "channels of a team which I am member of",
    "requestUrl": "/v1.0/teams/{team-id}/channels",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/channel_list",
    "tip": "This query requires a team id.  To find the team id of teams you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/joinedTeams",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "GET",
    "humanName": "channel info",
    "requestUrl": "/v1.0/teams/{team-id}/channels/{channel-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/channel_get",
    "tip": "This query requires a team id and a channel id from that team. To find the team id  & channel id, you can run: 1) GET https://graph.microsoft.com/v1.0/me/joinedTeams 2) GET https://graph.microsoft.com/v1.0/teams/{team-id}/channels",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "POST",
    "humanName": "create channel",
    "requestUrl": "/v1.0/teams/{team-id}/channels",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/channel_post",
    "postBody": "{\n   \"displayName\": \"Architecture Discussion\",\n   \"description\": \"This channel is where we debate all future architecture plans\"\n }",
    "tip": "This query requires a team id.  To find the team id of teams you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/joinedTeams.",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "GET",
    "humanName": "apps in a team",
    "requestUrl": "/v1.0/teams/{team-id}/installedApps?$expand=teamsAppDefinition",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamsappinstallation_list",
    "tip": "This query requires a team id. To find the team id, you can run: GET https://graph.microsoft.com/v1.0/me/joinedTeams",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "GET",
    "humanName": "tabs in a channel",
    "requestUrl": "/v1.0/teams/{team-id}/channels/{channel-id}/tabs?$expand=teamsApp",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamstab_list",
    "tip": "This query requires a team id and a channel id from that team. To find the team id  & channel id, you can run: 1) GET https://graph.microsoft.com/v1.0/me/joinedTeams 2) GET https://graph.microsoft.com/v1.0/teams/{team-id}/channels",
    "skipTest": false
},
{
    "category": "Microsoft Teams",
    "method": "GET",
    "humanName": "items in a team drive",
    "requestUrl": "/v1.0/groups/{group-id-for-teams}/drive/root/children",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/item_list_children",
    "tip": "This query requires a group id of the Team.  To find the group id of Teams you belong to, you can run: GET https://graph.microsoft.com/v1.0/me/joinedTeams",
    "skipTest": false
},
{
    "category": "Microsoft Teams (beta)",
    "method": "GET",
    "humanName": "messages (without replies) in a channel",
    "requestUrl": "/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/channel_list_messages",
    "tip": "This query requires a group id of the Team and channel id of the corresponding channel of that Team. To find the group id  & channel id, you can run: 1) GET https://graph.microsoft.com/beta/me/joinedTeams 2) GET https://graph.microsoft.com/beta/groups/{group-id-for-teams}/channels",
    "skipTest": false
},
{
    "category": "Microsoft Teams (beta)",
    "method": "GET",
    "humanName": "message in a channel",
    "requestUrl": "/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages/{message-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/channel_get_message",
    "tip": "This query requires a group id of the Team, channel id of the corresponding channel of that Team and message id of the message you want to retrieve. To find the group id, channel id and message-id you can run: 1) GET https://graph.microsoft.com/beta/me/joinedTeams 2) GET https://graph.microsoft.com/beta/groups/{group-id-for-teams}/channels 3) GET https://graph.microsoft.com/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages",
    "skipTest": false
},
{
    "category": "Microsoft Teams (beta)",
    "method": "GET",
    "humanName": "replies to a message in channel",
    "requestUrl": "/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages/{message-id}/replies",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/channel_list_messagereplies",
    "tip": "This query requires a group id of the Team, channel id of the corresponding channel of that Team and message id of the message of which you need the replies. To find the group id, channel id and message-id you can run: 1) GET https://graph.microsoft.com/beta/me/joinedTeams 2) GET https://graph.microsoft.com/beta/groups/{group-id-for-teams}/channels 3) GET https://graph.microsoft.com/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages",
    "skipTest": false
},
{
    "category": "Microsoft Teams (beta)",
    "method": "GET",
    "humanName": "reply of a message",
    "requestUrl": "/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages/{message-id}/replies/{reply-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/channel_get_messagereply",
    "tip": "This query requires a group id of the Team, channel id of the corresponding channel of that Team, message id of the message of which you need the reply and the id of the specific reply. To find the group id, channel id, message-id and reply-id you can run: 1) GET https://graph.microsoft.com/beta/me/joinedTeams 2) GET https://graph.microsoft.com/beta/groups/{group-id-for-teams}/channels 3) GET https://graph.microsoft.com/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages 4) GET https://graph.microsoft.com/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages/{message-id}/replies",
    "skipTest": false
},
{
    "category": "Microsoft Teams (beta)",
    "method": "POST",
    "humanName": "create chat thread",
    "requestUrl": "/beta/teams/{team-id}/channels/{channel-id}/chatThreads",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/channel_post_chatthreads",
    "postBody": "{\n\"rootMessage\": {\n       \"body\": {\n         \"contentType\": 2,\n         \"content\": \"Hello world\"\n       }\n   }\n }",
    "tip": "This query requires a team id and a channel id from that team. To find the team id  & channel id, you can run: 1) GET https://graph.microsoft.com/beta/me/joinedTeams 2) GET https://graph.microsoft.com/beta/teams/{team-id}/channels",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "my inbox rules",
    "requestUrl": "/beta/me/mailFolders/inbox/messagerules",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/resources/messagerule",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "my outlook categories",
    "requestUrl": "/beta/me/outlook/masterCategories",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/outlookuser_list_mastercategories",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "get email headers",
    "requestUrl": "/beta/me/messages?$select=internetMessageHeaders&$top=1",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/resources/message",
    "skipTest": false
},
{
    "category": "Outlook Mail",
    "method": "GET",
    "humanName": "list conference rooms",
    "requestUrl": "/beta/me/findRooms",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/user_findrooms",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "alerts",
    "requestUrl": "/v1.0/security/alerts?$top=1",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/alert_list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "alerts with 'High' severity",
    "requestUrl": "/v1.0/security/alerts?$filter=Severity eq 'High'&$top=5",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/alert_list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "alerts from 'Azure Security Center'",
    "requestUrl": "/v1.0/security/alerts?$filter=vendorInformation/provider eq 'ASC'&$top=5",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/alert_list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "alerts filter by 'Category'",
    "requestUrl": "/v1.0/security/alerts?$filter=Category eq 'ransomware'&$top=5",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/alert_list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "alerts filter by destination address",
    "requestUrl": "/v1.0/security/alerts?$filter=networkConnections/any(d:d/destinationAddress eq '{destination-address}')",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/alert_list",
    "tip": "This query requires a destination address. Run https://graph.microsoft.com/v1.0/security/alerts?$top=1 and search the results for a destinationAddress property.",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "alerts filter by 'Status'",
    "requestUrl": "/v1.0/security/alerts?$filter=Status eq 'NewAlert'&$top=1",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/alert_list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "secure scores (beta)",
    "requestUrl": "/beta/security/secureScores?$top=5",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/securescores_list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "secure score control profiles (beta)",
    "requestUrl": "/beta/security/secureScoreControlProfiles?$top=5",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/securescorecontrolprofiles_list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "TI indicators (beta)",
    "requestUrl": "/beta/security/tiIndicators",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicators-list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "GET",
    "humanName": "security actions (beta)",
    "requestUrl": "/beta/security/securityActions",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/securityactions-list",
    "skipTest": false
},
{
    "category": "Security",
    "method": "PATCH",
    "humanName": "update alert",
    "requestUrl": "/v1.0/security/alerts/{alert-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/alert_update",
    "postBody": "{\n  \"assignedTo\": \"test@contoso.com\",\n  \"comments\": [\"Comment 0\", \"Comment 1\"],\n  \"tags\": [\"Tag 0\", \"Tag 1\"],\n  \"feedback\": \"truePositive\",\n  \"status\": \"newAlert\",\n  \"vendorInformation\": {\n    \"provider\": \"provider\",\n    \"providerVersion\": \"3.0\",\n    \"subProvider\": null,\n    \"vendor\": \"vendor\"\n  }\n}",
    "tip": "This query requires an alert id. To find the ID of the alert, you can run: GET https://graph.microsoft.com/v1.0/security/alerts?$top=1",
    "skipTest": false
},
{
    "category": "Security",
    "method": "POST",
    "humanName": "create TI indicator (beta)",
    "requestUrl": "/beta/security/tiIndicators",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicators-post",
    "postBody": "{\n  \"activityGroupNames\": [\n      \"activityGroupNames-value\"\n    ],\n  \"confidence\": 90,\n  \"description\": \"This is a test indicator for demo purpose.\",\n  \"expirationDateTime\": \"{next-week}\",\n  \"externalId\": \"Test-8586502158541347997MS342\",\n  \"fileHashType\": \"sha256\",\n  \"fileHashValue\": \"289a8e8c330c27ab893fb769db38046feaca9d0b11e0aaa416ba70b0a51d58a4\",\n  \"targetProduct\": \"Azure ATP\",\n  \"threatType\": \"WatchList\",\n  \"tlpLevel\": \"green\"\n}",
    "skipTest": false
},
{
    "category": "Security",
    "method": "POST",
    "humanName": "create multiple TI indicators (beta)",
    "requestUrl": "/beta/security/tiIndicators/microsoft.graph.submitTiIndicators",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicator-submittiindicators",
    "postBody": "{\n  \"value\": [\n    {\n      \"activityGroupNames\": [],\n      \"confidence\": 0,\n      \"description\": \"This is a test indicator for demo purpose. Take no action on any observables set in this indicator.\",\n      \"externalId\": \"Test-8586502120486653922MS812-0\",\n      \"fileHashType\": \"sha256\",\n      \"fileHashValue\": \"0c0ebb4c90fa39785745bcc5e5cb40e3db7791be030061e2818684bc128b8f97\",\n      \"killChain\": [],\n      \"malwareFamilyNames\": [],\n      \"severity\": 0,\n      \"tags\": [],\n      \"targetProduct\": \"Azure ATP\",\n      \"threatType\": \"WatchList\",\n      \"tlpLevel\": \"green\"\n    },\n    {\n      \"activityGroupNames\": [],\n      \"confidence\": 0,\n      \"description\": \"This is a test indicator for demo purpose. Take no action on any observables set in this indicator.\",\n      \"externalId\": \"Test-8586502120486653922MS812-1\",\n      \"fileHashType\": \"sha256\",\n      \"fileHashValue\": \"86267de22dbad234ecf97870fdcf1a0e31149ee7a5fb595c050f69ca00f3529e\",\n      \"killChain\": [],\n      \"malwareFamilyNames\": [],\n      \"severity\": 0,\n      \"tags\": [],\n      \"targetProduct\": \"Azure ATP\",\n      \"threatType\": \"WatchList\",\n      \"tlpLevel\": \"green\"\n    }\n  ]\n}",
    "skipTest": false
},
{
    "category": "Security",
    "method": "PATCH",
    "humanName": "update a TI indicator (beta)",
    "requestUrl": "/beta/security/tiIndicators/{id}",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicator-update",
    "postBody": " {\n      \"additionalInformation\": \"Testing\"\n    }",
    "tip": "This query requires the TI indicator id. To find the ID, you can run: GET https://graph.microsoft.com/beta/security/tiIndicators?$top=1",
    "skipTest": false
},
{
    "category": "Security",
    "method": "POST",
    "humanName": "update multiple TI indicators (beta)",
    "requestUrl": "/beta/security/tiIndicators/microsoft.graph.updateTiIndicators",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicator-updatetiindicators",
    "postBody": "{\n  \"value\": [\n    {\n      \"id\": \"tiindicator-id-1\",\n      \"additionalInformation\": \"Testing\"\n    },\n    {\n      \"id\": \"tiindicator-id-2\",\n      \"additionalInformation\": \"Testing 2\"\n    }\n  ]\n}",
    "tip": "This query requires the TI indicator id. To find the ID, you can run: GET https://graph.microsoft.com/beta/security/tiIndicators?$top=5\n\n ",
    "skipTest": false
},
{
    "category": "Security",
    "method": "POST",
    "humanName": "create security action (beta)",
    "requestUrl": "/beta/security/securityActions",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/securityactions-post",
    "postBody": "{\n    \"name\": \"blockIp\",\n     \"vendorInformation\" :\n     {  \"provider\": \"Windows Defender ATP\",\n          \"vendor\": \"Microsoft\"\n      },\n    \"parameters\" : [\n      {\"name\": \"IP\", \"value\":\"1.2.3.4\" }\n    ]\n}",
    "tip": "Change the provider, vendor and parameters are needed",
    "skipTest": false
},
{
    "category": "Security",
    "method": "DELETE",
    "humanName": "delete TI indicator (beta)",
    "requestUrl": "/beta/security/tiIndicators/{id}",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicator-delete",
    "tip": "This query requires the TI indicator id. To find the ID, you can run: GET https://graph.microsoft.com/beta/security/tiIndicators?$top=1",
    "skipTest": false
},
{
    "category": "Security",
    "method": "POST",
    "humanName": "delete multiple TI indicators (beta)",
    "requestUrl": "/beta/security/tiIndicators/microsoft.graph.deleteTiIndicators",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicator-deletetiindicators",
    "postBody": "{\n  \"value\": [\n    \"tiindicatorid-value1\",\n    \"tiindicatorid-value2\"\n  ]\n}",
    "tip": "This query requires the TI indicator id. To find the ID, you can run: GET https://graph.microsoft.com/beta/security/tiIndicators?$top=5",
    "skipTest": false
},
{
    "category": "Security",
    "method": "POST",
    "humanName": "delete multiple TI indicators by external Id (beta)",
    "requestUrl": "/beta/security/tiIndicators/microsoft.graph.deleteTiIndicatorsByExternalId",
    "docLink": "https://docs.microsoft.com/en-us/graph/api/tiindicator-deletetiindicatorsbyexternalid",
    "postBody": "{\n  \"value\": [\n    \"tiindicator-externalId-value1\",\n     \"tiindicator-externalId-value2\"\n  ]\n}",
    "tip": "This query requires the TI indicator external id. To find the ID, you can run: GET https://graph.microsoft.com/beta/security/tiIndicators?$top=5",
    "skipTest": false
},
{
    "category": "User Activities",
    "method": "PUT",
    "humanName": "create a user activity and history item",
    "requestUrl": "/v1.0/me/activities/uniqueIdInAppContext",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/projectrome_put_activity#example-2---deep-insert",
    "headers": [
        {
            "name": "Content-Type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n    \"appActivityId\": \"uniqueIdInAppContext\",\n    \"activitySourceHost\": \"https://graphexplorer.blob.core.windows.net\",\n    \"userTimezone\": \"America/Los Angeles\",\n    \"appDisplayName\": \"Graph Explorer\",\n    \"activationUrl\": \"https://developer.microsoft.com/en-us/graph/graph-explorer\",\n    \"fallbackUrl\": \"https://developer.microsoft.com/en-us/graph/graph-explorer\",\n    \"contentInfo\": {\n        \"@context\": \"http://schema.org\",\n        \"@type\": \"CreativeWork\",\n        \"author\": \"Jennifer Booth\",\n        \"name\": \"Graph Explorer User Activity\"\n    },\n    \"visualElements\": {\n        \"attribution\": {\n            \"iconUrl\": \"https://graphexplorer.blob.core.windows.net/explorerIcon.png\",\n            \"alternateText\": \"Microsoft Graph Explorer\",\n            \"addImageQuery\": \"false\"\n        },\n        \"description\": \"A user activity made through the Microsoft Graph Explorer\",\n        \"backgroundColor\": \"#008272\",\n        \"displayText\": \"Graph Explorer Sample User Activity\",\n        \"content\": {\n            \"$schema\": \"http://adaptivecards.io/schemas/adaptive-card.json\",\n            \"type\": \"AdaptiveCard\",\n            \"body\":\n            [{\n                \"type\": \"TextBlock\",\n                \"text\": \"With activities, developers have a way to capture the unique tasks for users of their app which flow seamlessly across any platform and device, allowing them to quickly resume working on their preferred screen. Using the Activity Feed, developers can create a human-centric view of the tasks most important to users helping reduce friction when switching from web to mobile to PC and beyond.\"\n            }]\n        }\n    },\n    \"historyItems\":[\n        {\n            \"userTimezone\": \"America/Los Angeles\",\n            \"startedDateTime\": \"{todayMinusHour}\",\n            \"lastActiveDateTime\": \"{today}\"\n        }\n    ]\n}",
    "skipTest": false
},
{
    "category": "User Activities",
    "method": "GET",
    "humanName": "get recent user activities",
    "requestUrl": "/v1.0/me/activities/recent",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/projectrome_get_recent_activities",
    "skipTest": false
},
{
    "category": "Applications (beta)",
    "method": "GET",
    "humanName": "retrieve the list of applications",
    "requestUrl": "/beta/applications",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/application_list",
    "skipTest": false
},
{
    "category": "Applications (beta)",
    "method": "POST",
    "humanName": "create a new application",
    "requestUrl": "/beta/applications",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/application_post_applications",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n        \"displayName\": \"My App\"\n    }",
    "skipTest": false
},
{
    "category": "Applications (beta)",
    "method": "GET",
    "humanName": "retrieve application properties",
    "requestUrl": "/beta/applications/{application-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/application_get",
    "tip": "This query requires an application id. To find the ID of an application&#44; you can run: GET https://graph.microsoft.com/beta/applications",
    "skipTest": false
},
{
    "category": "Applications (beta)",
    "method": "PATCH",
    "humanName": "update application properties",
    "requestUrl": "/beta/applications/{application-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/application_update",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n        \"signInAudience\": \"AzureADMyOrg\"\n    }",
    "tip": "This query requires an application id. To find the ID of an application&#44; you can run: GET https://graph.microsoft.com/beta/applications",
    "skipTest": false
},
{
    "category": "Applications (beta)",
    "method": "DELETE",
    "humanName": "delete an application",
    "requestUrl": "/beta/applications/{application-id}",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/application_delete",
    "tip": "This query requires an application id. To find the ID of an application&#44; you can run: GET https://graph.microsoft.com/beta/applications",
    "skipTest": false
},
{
    "category": "Applications (beta)",
    "method": "GET",
    "humanName": "retrieve a list of owners",
    "requestUrl": "/beta/applications/{application-id}/owners",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/application_list_owners",
    "tip": "This query requires an application id. To find the ID of an application&#44; you can run: GET https://graph.microsoft.com/beta/applications",
    "skipTest": false
},
{
    "category": "Applications (beta)",
    "method": "POST",
    "humanName": "create a new owner",
    "requestUrl": "/beta/applications/{application-id}/owners",
    "docLink": "https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/application_post_owners",
    "headers": [
        {
            "name": "Content-type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n        \"directoryObject\": {\n        }\n    }",
    "tip": "This query requires an application id. To find the ID of an application&#44; you can run: GET https://graph.microsoft.com/beta/applications. In the request body supply a JSON representation of directoryObject object",
    "skipTest": false
},
{
    "category": "Notifications (beta)",
    "method": "POST",
    "humanName": "create a raw notification",
    "requestUrl": "/beta/me/notifications",
    "docLink": "https://aka.ms/graphNotificationsDocs",
    "headers": [
        {
            "name": "Content-Type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"targetHostName\": \"graphnotifications.sample.windows.com\",\n  \"appNotificationId\": \"sampleRawNotification\",\n  \"payload\": {\n    \"rawContent\": \"Hello World!\"\n  },\n  \"targetPolicy\": {\n    \"platformTypes\": [\n      \"windows\",\n      \"ios\",\n      \"android\"\n    ]\n  },\n  \"priority\": \"High\",\n  \"displayTimeToLive\": \"60\"\n}",
    "tip": "Please enable the Notifications.ReadWrite.CreatedByApp permission in order to use this query.  A raw notification is a notification that is received by the application and processed in an application specific manner.  A raw notification may or may not include UI/UX for the user. Note - This query will only work with a sample application by default. See https://aka.ms/projectRomeSamples/ for additional info.",
    "skipTest": false
},
{
    "category": "Notifications (beta)",
    "method": "POST",
    "humanName": "create a visual notification",
    "requestUrl": "/beta/me/notifications",
    "docLink": "https://aka.ms/graphNotificationsDocs",
    "headers": [
        {
            "name": "Content-Type",
            "value": "application/json"
        }
    ],
    "postBody": "{\n  \"targetHostName\": \"graphnotifications.sample.windows.com\",\n  \"appNotificationId\": \"sampleDirectToastNotification\",\n  \"payload\": {\n    \"visualContent\": {\n      \"title\": \"Hello World!\",\n      \"body\": \"Notifications are Great!\"\n    }\n  },\n  \"targetPolicy\": {\n    \"platformTypes\": [\n      \"windows\",\n      \"ios\",\n      \"android\"\n    ]\n  },\n  \"priority\": \"High\",\n  \"displayTimeToLive\": \"60\"\n}",
    "tip": "Please enable the Notifications.ReadWrite.CreatedByApp permission in order to use this query.  A visual notification is a notification that a user can see by default within the notification center of the target platform. Note - This query will only work with a sample application by default. See https://aka.ms/projectRomeSamples/ for additional info.",
    "skipTest": false
}]