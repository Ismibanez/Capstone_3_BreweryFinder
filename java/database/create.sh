#!/bin/bash
BASEDIR=$(dirname $0)
DATABASE=final_capstone
psql -p 5433 -U postgres -f "$BASEDIR/dropdb.sql" &&
createdb -p 5433 -U postgres $DATABASE &&
psql -p 5433 -U postgres -d $DATABASE -f "$BASEDIR/schema.sql" &&
psql -p 5433 -U postgres -d $DATABASE -f "$BASEDIR/user.sql"
