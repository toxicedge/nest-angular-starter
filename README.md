# Nestjs Server + Angular Client

_A simple starter project that hosts a Angular Client on a Nestjs Server_

`npm run all`

- Client and server projects both compiled to respective folders in `./dist`
- Nestjs server configured to serve static (Angular) files from `./dist/client`

#### Shared Code

Common code shared between Client/Server should be placed in `./server/src/shared/`

- Server-side code should access shared code using relative paths. E.g. `../../shared/shared.model`
- Client code can access shared code using the `@shared` path alias. E.g. `@shared/shared.model`
