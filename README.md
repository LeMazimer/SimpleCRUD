# SimpleCRUD
Simple CRUD application for interviews

- based on Django REST framework for API, React for frontend (Redux for state management)
inštalacija:

1. cd simplecrud
2. python -m venv venv
3. aktiviraš venv (na linux mašini: source venv/bin/activate, na windows mašini: venv/Scripts/activate.bat ali activate.ps1 za powershell)
4. python -m pip install -r requirements.txt
5.

`python manage.py makemigrations`
`python manage.py migrate`

to bo ustvarilo migracije in lokalno bazo
nato pa:

`python manage.py createsuperuser` -> ustvari admin account
`python manage.py runserver` (default port je 8000)
sedaj bi morali requesti na api iz postmana delovati kot pričakovano (/api/auth/ POST request za dobit token za ostale endpointe)

za frontend:

cd simplecrud/frontend
npm install
npm start

frontend prikaže tabelo naslovov samo če si prijavljen