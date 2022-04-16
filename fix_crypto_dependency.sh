  #!/bin/bash
webpack_config="./node_modules/react-scripts/config/webpack.config.js"
webpack_config_backup="./node_modules/react-scripts/config/webpack.config.js.bckp"

line_number=304
line_to_add='fallback: { "crypto": require.resolve("crypto-browserify") }, // Patch realm-web crypto dependency'

echo "Fixing realm-web crypto dependency..."


if grep -q "$line_to_add" $webpack_config
then
    echo "Crypto fallback already added into the file $webpack_config"
else
    echo "Adding Crypto fallback into the file $webpack_config"
    cp $webpack_config $webpack_config_backup
    # The '\' character are for adding the indentation in the new line:
    sed -i "$line_number i \ \ \ \ \ \ $line_to_add" $webpack_config
fi
echo "Done! realm-web crypto dependency fixed. You can now run 'npm run build' without warnings :)"