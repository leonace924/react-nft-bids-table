# NFT Bids Table

Fetch a list of Bids and render their details in a list/table format.

## Getting Started

Install & run the development server:

```bash
# clone
git clone https://github.com/leonace924/react-nft-bids-table.git
cd react-nft-bids-table

# install
yarn install

# run
yarn dev
```

### Features I've done

- The component should fetch the bids, process the result, and render their info in a list. Bids should not be passed as props to this component.
- The NFT image and name should be shown in each row.
- The price should be rendered in a human-readable format.
- The component should present expiration timestamps in the user's timezone, relative to the current time (e.g. "10 minutes ago" or "in 3 hours").
- The component should clearly differentiate expired Bids from active Bids.

### Features I've not done

- The bidder address should display as an ENS name, if it resolves to one.
- You should be able to configure the sort order of the items in this component at the callsite / parent (e.g. by creation time, price, etc).

### Structure

- `components/`: All `React` components to be rendered by `pages`.
- `hooks/`: Global hooks (keep components-related hooks together, here is only for global hooks that are not part of a component).
- `lib/`: Constants definitions, we can replace API url with environmental variable in `.env`.
- `pages/`: Pages.
- `routes/`: Whole app routes.
- `styles/`: Global css.
- `types/`: Typescript types.
- `utils/`: All utilities used in the project.
