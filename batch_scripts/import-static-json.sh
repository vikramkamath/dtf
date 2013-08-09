case $1 in
    "") echo "Usage: <script-name> <dbname> <jsonfilename with json extension";exit 1;;
esac
case $2 in
        "") echo "Usage: <script-name> <dbname> <jsonfilename with json extension";exit 1;
    esac
echo "Uploading data from $2 to DB: $1.."

#cat "$2" | POST -sS "http://localhost:5984/$1" -c "application/json"
curl -X POST -i -H "Accept: application/json" -H "Content-Type: application/json" --data @$2 --progress-bar "http://127.0.0.1:5984/$1" 

