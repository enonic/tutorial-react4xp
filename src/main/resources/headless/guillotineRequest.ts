const doGuillotineRequest = ({
  url,                        // <1>
  query,                      // <2>
  variables,                  // <3>
  handleResponseErrorFunc,    // <4>
  extractDataFunc,            // <5>
  handleDataFunc,             // <6>
  catchErrorsFunc             // <7>
}) => {

  fetch(
      url,
      {
          method: "POST",
          body: JSON.stringify({
              query,
              variables}
          ),
          credentials: "same-origin",
      }
  )
      .then(handleResponseErrorFunc)
      .then(response => response.json())
      .then(extractDataFunc)
      .then(handleDataFunc)
      .catch(catchErrorsFunc)
};

export default doGuillotineRequest;
