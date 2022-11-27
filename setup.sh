cp .env django_backend/django_backend/.env
npm install
npm run build
sudo pip install -r django_backend/requirements.txt 
sudo python django_backend/manage.py migrate
sudo python django_backend/manage.py runserver 0.0.0.0:8080 