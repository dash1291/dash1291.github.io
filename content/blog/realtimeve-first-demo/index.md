---
title: "Collaborative VisualEditor: First Demo"
date: 2012-07-05
---

I feel pretty bad for not having written about my Google Summer of Code project that I'm undertaking this summer for Wikimedia Foundation for prototyping collaborative editing feature for the new under-development VisualEditor(wysiwyg). Its been a while since I was selected, and started working on it, so I won't go into discussing the story around how I got started on it. But, I would like to discuss about the present state of the project, where its heading and also a bare working demo of the code produced so far.

So the VisualEditor project is a wysiwyg editor for MediaWiki, designed from scratch keeping in mind the complexities of the Wikitext mapping to HTML and data structures suitable for inline editing. The changes to the text in VisualEditor are in the form of transactions. There are transactions for insertion/deletion of text as well as applying formatting attributes to a portion of text. 
So most of the collaboration thing revolves around these transactions. There is a collaboration server which listens for new connections from clients who requests to initiate an editing session. A client module establishes connection with the server, and listens to the changes made in the document and translates the resulting transactions to the server. A thing that should be noted here is, the project is under Phase 1 which would support only one client who publishes changes to the server's document and other connected clients simply listen to these changes and apply them in their local documents. Phase 2 would support multiple publishers which would bring in conflicts and concurrency issues and perhaps measures to fight with them.

So, there is a small list of things which have been done so far -

## On the Server

1. Listen to new connections and define I/O events.
2. Bind the VE modules into a single module which is imported as a top-level `ve` object.
3. Create a new user session on every new connection and associate with the requested document.
4. Create a new document model instance if an editing session is initiated on a new document.
5. Apply incoming transactions to the document model.
6. Invoke/revoke publishing rights on user sessions.

## On the Client

1. Initialize a new session with the server on manual request.
2. Enable/Disable editing based on publishing right flag received from the server.
3. Listen to document change events and push transactions to the server if publishing is given.
4. Apply incoming transaction from the server if the origin of the transaction is a different client.
5. Retain the document state before collaborative editing is turned on so it can be restored when collaborative mode is turned off.

## Brief Internals

The collaboration server is a Node.js based server, which uses socket.io for making persistent connections with the clients for realtime communication. The client module binds against the server's API which is laid in terms of the socket.io events defined in the server. All the VE functionality is accessed through a binding module which exports a top-level `ve` object much like the `ve` namespace is used on the client-side. The server can parse the wiki pages internally using the parser modules and also can fetch the parsed HTML output from an external parsoid service over HTTP. As of now, an external parsoid service is used for scalability until something better can be figured out.

## What Should be Coming?

1. Authentication

    > Some code has been written for handling user authentication on the socket connections level but is not functional right now. Also, due some review on the proper technique to do it, its deferred for a little later.

2. Editing control transfer

    > Right now editing control is given to any user who joins when there is no client with publishing right is connected to the server on a same document. A publishing user before disconnecting might want to transfer the editing control to a client which is already connected as non-publishing client.

3. Transactions buffering

    > Right now every transaction is fired towards the server as it is generated in the VisualEditor. This would be quite a network activity. So, there would be some buffering and capping of the transactions before they are transported to the server.

## About the Demo

1. Updated fork of `realtimeve` branch of VisualEditor.
2. Runs the collaboration server alongside the parsoid service in the same master process but on a different port. The collaboration server uses this parsoid service to fetch parsed HTML over HTTP.
3. The client UI lets users to turn-on/off the collaborative editing mode.
4. The user with the editing control is shown in green in the users list displayed on the right.

[**Link to the demo site**][1]

### Less Important (Fancy) Information

The demo is hosted on an Amazon EC2 micro instance, running Ubuntu 11.10. The server uses Node.js v0.8.1 and socket.io v0.9.6. The cluster module used in running the parsoid service forks five workers while running the collaboration server on the master process.

## Reporting issues

If you've got suggestion to improve a feature, or about a new feature or you want to report some bugs, you can get in touch with me directly through my email - ashish[dot]dubey91[at]gmail[dot]com.

[1]: http://ashishdubey.info/mw/index.php
