import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile)

// Optionally add Debug Logging
Amplify.Logger.LOG_LEVEL = 'DEBUG';