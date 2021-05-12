# Skynet Leaderboard

This website was made for the Skynet Labs Built to Explore Hackathon.

It is a Skynet Web App, which builds on the MySky and DAC systems.

## Build Your Own

This web app is based on create-react-app and can be run by cloning and running `yarn` to install dependencies, then `yarn start`. To build, run `yarn build` then upload the `build` folder to [https://siasky.net](https://siasky.net).

It relies on two other items (in addition to MySky and the [Profile DAC](https://github.com/skynethubio/userprofile-library)):

- The [Content Record Scraper](https://github.com/SkynetLabs/content-record-scraper), which takes UserIDs, searches their discoverable content posted using the [Content Record DAC](https://github.com/SkynetLabs/content-record-library) or [Feed DAC](https://github.com/redsolver/feed-dac-library) and adds entries to a MongoDB instance.
- The [Leaderboard API](https://github.com/SkynetLabs/leaderboard-api), which handles requests from the frontend for reading data from the scraper.

Deployed to [https://skynet-hackathon.hns.siasky.net](https://build-explore-dream.hns.siasky.net)
