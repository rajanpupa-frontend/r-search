# r-search

A local search engine .
A ReactJS UI on top of ElasticSearch engine.

### Technologies

- Elastic search 6
- ReactJS

### Elastic search

Needs to enable `CORS` in your elastic search instance

Imaging this as an application where you log your daily thoughts and activities. 
Then someday, you want to search something by a keyword. You can use this to do that.

### How to Run

- Run your Elastic Search engine in port 9200 (Tested with version 7.6.2)
- Start this application `npm start`
- NOTE: This application used the index named `rsearch`
- Note: If the index is not already present, it will create the index for you
- The UI will open.
- Navigate to the Post page 
- Create some documents
- Go to the search page
- You can search for the documents in the search page
- You can click on the link, to see the details
