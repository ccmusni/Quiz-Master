Quiz Master is Quipper's technical exam for web developers.

Modules:
1. Manage Questions (CRUD)
2. Quiz

Dependencies:
1. Installed ruby version '2.5.1'
2. Installed PostgreSQL

Procedures:
1. Open command line in app directory and run "gem install vendor/cache/bundler-1.16.2.gem --local"
2. Run "bundle install --local"
3. configure quiz-master/config/database.yml, specify user and password in default environment.
4. Run "rails db:create" in terminal
5. Run "rails db:migrate" in terminal
6. Run "rails db:seed" in terminal
7. Run "rails server"
8. Run application in browser using "http://localhost:3000"

Test Procedures:
1. Run "rails db:migrate RAILS_ENV=test"
2. Run "rspec"
