# Use official Python image as base
FROM python:3.11-slim

# Set environment variables to optimize Python behavior
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Provide a default SECRET_KEY for build/deploy (override in production)
ENV DJANGO_SECRET_KEY=changeme_secret_key_for_build

# Set work directory to /app
WORKDIR /app

# Install system dependencies (including git and MySQL dev headers for mysqlclient)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        git \
        build-essential \
        python3-dev \
        default-libmysqlclient-dev \
        pkg-config \
        libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first to leverage Docker cache
COPY requirements.txt /app/

# Upgrade pip separately for clearer logs
RUN pip install --upgrade pip

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy project source code into the container
COPY . /app/

# Collect static files into STATIC_ROOT
RUN python manage.py collectstatic --noinput

# Expose the port the app will listen on (8080 for Fly.io)
EXPOSE 8080

# Start the application using Gunicorn, binding to the FLY-provided port or default 8080
CMD ["sh", "-c", "gunicorn myportfolio.wsgi:application --bind 0.0.0.0:${PORT:-8080}"]
