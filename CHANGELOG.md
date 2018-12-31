## 0.3.0 (Dec 31, 2018)

### Updated all relative packages in package.json to support latest versioning.
For more details please view commit: [17978d9](https://github.com/mmajdanski/cra-redux-observable/commit/17978d98b1dbfcbaf07a17f627afb13d41ae4515)

## 0.2.0 (Aug 24, 2018)

### File Structure and Actions

* Added `/src/actions/` folder that contains all of the Counter Actions
* Changed all string literals to const exports for the following reasons (all imported from the [Redux Docs](https://redux.js.org/recipes/reducingboilerplate)):

	* It helps keep the naming consistent because all action types are gathered in a single place.
	* Sometimes you want to see all existing actions before working on a new feature. It may be that the action you need was already added by somebody on the team, but you didn't know.
	* The list of action types that were added, removed, and changed in a Pull Request helps everyone on the team keep track of scope and implementation of new features.
	* If you make a typo when importing an action constant, you will get `undefined`. Redux will immediately throw when dispatching such an action, and you'll find the mistake sooner.
	* 
## 0.1.0 (Aug 23, 2018)

### Initial Release of the cra-redux-observable Package
