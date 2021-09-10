format:
		yarn format

react:
		yarn start

eslint-react:
		yarn add eslint eslint-plugin-prettier eslint-config-prettier babel-eslint --dev
		yarn add --dev prettier --exact
		yarn add eslint-plugin-react --dev 
		yarn add eslint-plugin-only-warn --dev

eslint-typescript:
		yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
		yarn add eslint-config-prettier eslint-plugin-prettier --dev
		yarn add eslint-plugin-react eslint-plugin-only-warn --dev
		yarn add --dev prettier --exact

stylelint-prettier:
		yarn add stylelint stylelint-config-rational-order stylelint-config-standard stylelint-order stylelint-prettier stylelint-config-prettier stylelint-scss --dev 
