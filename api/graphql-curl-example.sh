curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ hello(name: \"Andy\") }" }' \
  https://api.yoga2-serverless.now.sh