# Use an official Python image as the base image
FROM python:3.10-slim-buster

# Set the working directory
WORKDIR /app

# Copy the required files to the working directory
COPY requirements.txt .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code to the working directory
COPY . .

# Expose the default port for Django
EXPOSE 8000

# Set the default command to run when the container starts
CMD [ "python", "./manage.py", "runserver", "0.0.0.0:8000" ]
