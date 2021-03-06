const graphql = require('graphql');
const _ = require('lodash')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

// dummy data
var books = [
  {name:'Name of the Wind',genre:'Fantasy',id:'1',authorId:'1'},
  {name:'Second Wind',genre:'Fantasy',id:'2',authorId:'2'},
  {name:'Final Wind',genre:'Sci-fi',id:'3',authorId:'3'},
];

var authors = [
  {name:'Patrick Rothfuss',age:44,id:'1'},
  {name:'Brandon Wind',age:42,id:'2'},
  {name:'Terry Wind',age:66,id:'3'},
];

const BookType = new GraphQLObjectType({
  name:'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}

    author: {
      type: AuthorType,
      resolve(parent,args){

        // code to get data from db or other source

        console.log(parent);
        //console.log(typeof(args.id));
        return _.find(authors, {id: parent,authorId});
    }


  })
})

const AuthorType = new GraphQLObjectType({
  name:'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt}
    books:{
      type:new GraphQLList(BookType),
      resolve(parent,args){
        return _.filter(books,{authorId:parent.id})
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    book:{
      type:BookType,
      args:{id:{type:GraphQLID}},

      resolve(parent,args){
        // code to get data from db or other source

        console.log(typeof(args.id));

        return _.find(books, {id: args.id});
      }
    }
    author{
      type: AuthorType,
      args:{id:{type:GraphQLID}}
      resolve(parent, args){
       return _.find(authors, {id:args.id}) 
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query:RootQuery
});

