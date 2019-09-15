# CharityChain

## Inspiration

**In 2012, of the $18.6 million the Kids Wish Network raised, only $240,000 was spent on granting wishes, which represents less than one percent of the money donated.**

While things aren't usually as bad as the Kids Wish Network, turns out that most charities today [spend anywhere from 25% to 85% of their total income on charitable causes](https://www.theweek.co.uk/fact-check/98581/fact-check-how-do-charities-spend-your-money). That is an absolutely _huge_ range. We don't like the idea of donation being a gamble between actually helping a cause and paying the salaries of a few corporate bigwigs.


While you technically can find out how your favorite charity is spending its money, there's a lot of financial research and digging through tax forms be done first. And all this is after assuming we can trust that a charity is accurately self-reporting their finances. The best case right now is that someone does _a lot_ of hard work finding a charity for a cause they care about that also spends their money wisely. The worst case is that someone donates money to a charity that pockets most of the money for themselves. 


## What it does


CharityChain is a platform that allows users to donate to charities and see _exactly_ what their money is being spent on. All transactions, both donations and charity expenditures, are tracked on a public Ethereum blockchain. This makes transaction information immutable, secure, and totally transparent. Users get to stay anonymous, while charities are put on blast. We make it easy to be generous and hard to be greedy.

On the user's end, it's easy to log in and donate to the charities they care about. Everyone can see a breakdown of how a charity on our platform has been spending money acquired through us. On a user's own profile, they can trace exactly what each donation has been spent on, thanks to the public ledger.

On the charity's end, we made sure it's easy to begin using CharityChain as a source of donations. A charity simply connects their bank account, and can use money accrued from donations on CharityChain to reimburse any payments on their account.


## How we built it


The UIs for both users and charities are built in React. We store key information, such as wallet addresses, about users and charities in a Realtime Database using Firebase. We decided to store all donation data inside a blockchain in order to ensure complete transparency and give the user a reason to trust what we're saying. Firebase finally also acts as a "lightning layer" so we can quickly operate on our data while the blockchain acts as our source of truth.


This wouldn't have been possible without the excellent Link API, it acted as a highway to get our API running. The blockchain stores reimbursements the charity can make, and donations the user gives as events. These are extremely cheap and easy to traverse, therefore it made sense to store frequent interactions with the chain.  


Read more on [Devpost](https://devpost.com/software/charitychain)
