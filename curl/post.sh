curl --include --request POST  http://tic-tac-toe.wdibos.com \
  --header "Content-Type: application/json" \
  --data '{
    "users": {
      "email": "YerMom@gmail.com",
      "password": "password1"
    }
  }'
