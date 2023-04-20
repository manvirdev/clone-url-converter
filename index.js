function convert(str) {
  // Ensure the input is a string
  if (typeof str !== 'string' || !str.trim()) {
    throw new TypeError('Invalid format of input for method: convertString in package httptosshconverter');
  }

  // Check if the input is a valid GitHub HTTPS clone URL
  if (testGitHubHttpsCloneLink(str)) {
    return convertToSSH(str);
  } 
  // Check if the input is a valid GitHub SSH clone URL
  else if (testGitHubSshCloneLink(str)) {
    return convertToHttps(str);
  } 
  // Throw an error if the input is not a valid GitHub clone URL
  else {
    throw new Error('Invalid string input for the method: convertString in package httptosshconverter');
  }
}

function testGitHubHttpsCloneLink(input) {
  // Check if the input matches the pattern for a GitHub HTTPS clone URL
  const regex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\.git$/;
  return regex.test(input);
}

function testGitHubSshCloneLink(input) {
  // Check if the input matches the pattern for a GitHub SSH clone URL
  const regex = /^git@github\.com:[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\.git$/;
  return regex.test(input);
}

function convertToHttps(str) {
  // Convert the input from SSH to HTTPS format
  if (!testGitHubSshCloneLink(str)) {
    throw new Error('Invalid string input for the method: convertToHttps in package httptosshconverter');
  }
  return str.replace(/^git@github\.com:/, 'https://github.com/');
}

function convertToSSH(str) {
  // Convert the input from HTTPS to SSH format
  if (!testGitHubHttpsCloneLink(str)) {
    throw new Error('Invalid string input for the method: convertToSSH in package httptosshconverter');
  }
  return str.replace(/^https:\/\/github.com\//, 'git@github.com:');
}

module.exports = { convert };
