# clone-url-converter

A simple npm package for converting GitHub's Http/Https clone links to SSH format.

## Installation

To install the package, run the following command:

```bash
npm install clone-url-converter
```

## Usage
Import the convert function from the package and use it to convert your GitHub clone links.

```js
import { convert } from 'clone-url-converter';

const httpsLink = 'https://github.com/username/repo.git';
const sshLink = convert(httpsLink);
console.log(sshLink); // git@github.com:username/repo
```

The convert function will throw an error if the input is not a valid GitHub clone URL.

## License
This package is licensed under the MIT License. See the LICENSE file for details.

## Issues
If you encounter any issues or bugs, please report them in the GitHub issue tracker for this project.

## Contributing
Contributions are welcome! If you have any improvements or bug fixes, please submit a pull request to the GitHub repository for this project.

For more information, see the GitHub repository: https://github.com/manvirdev/clone-url-converter

