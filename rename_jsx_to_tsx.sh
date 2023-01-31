# Rename all *.js to *.tsx
for file in ./components/*.js; do 
    mv -- "$file" "${file%.js}.tsx"
done

for file in ./pages/*.js; do 
    mv -- "$file" "${file%.js}.tsx"
done