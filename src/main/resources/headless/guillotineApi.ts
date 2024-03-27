// @ts-expect-error No types for /lib/guillotine yet.
import {createSchema, execute} from '/lib/guillotine';

const SCHEMA = createSchema();


// ----------------------------------------------  FOR USE IN CONTROLLERS:    ------------------------------------

export const executeQuery = (query, variables) => execute({
  query: query,
  variables: variables,
  schema: SCHEMA
});

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
