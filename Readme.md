# Michael Allen - Times Higher Education take home test

A relatively simple GraphQL server to query the data from the json files.

Uses:

- graphql-code-generator for strong typing
- apollo-server as a graphql server
- jest for testing

Lacks:

- integration tests - testing resolvers well is important but hard.

  I have done it before well on other projects but that takes a few days to get properly
  set up from scratch with strong typing and good downstream dependency mocking so you
  can properly test edge cases.

- complex query interface - filter / paging / limits etc all left out for this simple api

## Usage

```
> npm install
> npm test
> npm start
```

Server will listen on `http://localhost:4000`. Navigate there and use the helpful apollo studio
link to get an interactive console to play with the data.

## Examples

- **List all institutions**

  ```
  query AllInstitutions {
      institutions {
          name
      }
  }
  ```

- **List submissions for institutions**

  ```
  query AllInstitutionsWithSubmissions {
      institutions {
          name
          submissions {
              year
          }
      }
  }
  ```

- **List all submissions**

  ```
  query AllSubmissions {
      submissions {
          year
          institution {
              name
          }
      }
  }
  ```

## Comments

The advice said "do one small, relatively simple thing". I figured, I spent all last year
building GraphQL APIs so that'll be relatively simple thing to do. I forgot just how
much is involved in the initial setup of a GraphQL API.

As a result the actual API interface is significantly smaller and simpler than I expected
I could get done in the time.

Some queries I had thought would be interesting to write:

```
query {
    # Where could I learn Chemistry?
    institutionsBySubject(subject: 'Chemistry') { ... }

    # Which institutions are we still waiting for reply from?
    institutionsMissingSubmission(year: 2021) { ... }
}
```

These would be pretty easy to implement but you have to draw the line somewhere.
