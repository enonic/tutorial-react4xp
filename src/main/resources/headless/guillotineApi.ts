// @ts-expect-error No types for /lib/guillotine yet.
import {createSchema} from '/lib/guillotine';

// @ts-expect-error No types for /lib/graphql yet.
import {execute} from '/lib/graphql';


const SCHEMA = createSchema();


// Expose and use in XP controllers:
export const executeQuery = (query, variables) =>         // <1> <2>
  execute(SCHEMA, query, variables);


// Expose and use in POST requests from frontend:
export const post = req => {                             // <3>
  const {
    query,
    variables
  } = JSON.parse(req.body);

  return {
    contentType: 'application/json',
    body: executeQuery(query, variables),
    status: 200
  };
};
