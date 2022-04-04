
const post_schema = {
    author: value => typeof value === 'string'||value instanceof String,
    date: value => Date.parse(value),
    title: value => typeof value === 'string'||value instanceof String,
    description: value => typeof value === 'string'||value instanceof String,
    content: value => typeof value === 'string'||value instanceof String
  };
  

  
  const validate = (object, schema) => {
       const errors = Object.keys(schema).filter(key => !schema[key](object[key]));
       return !errors.length > 0
    };
  
  
module.exports = {
    post_schema,
    validate
}
 