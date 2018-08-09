const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints:['127.0.0.1'], keyspace: 'shoutkeyspace'});


// For just 1 query 
/* const query0 = 'INSERT INTO users (username, password) values (?, ?)';

 client.execute(query0, ['jvertil', '1234abc1234'])
  	.then(result => console.log('Successfully inserted!!'));*/


// For a batch of queries
 const queries = [
 	{
 		query: 'INSERT INTO users (username, password) values (?, ?)',
 		params: ['kessou', '1111']
 	}, 
 	{
 		query: 'INSERT INTO users (username, password) values (?, ?)',
 		params: ['nana', '2222']
 	},
 	{
 		query: 'INSERT INTO users (username, password) values (?, ?)',
 		params: ['alou', '3333']
 	},
 ]


 client.batch(queries, {prepare: true})
 	.then(result => {console.log('Data updated on cluster ', result)});



client.connect((err, result) => {
	if (err) {
		console.log('Error connecting with Cassadra !!', err);
	} else {
	 	console.log('Cassandra connected !!');
	}
})