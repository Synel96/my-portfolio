### Dockerfile for Django backend (placed alongside manage.py)

```dockerfile
# Use official Python image as base
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1  # Prevent Python from writing .pyc files
ENV PYTHONUNBUFFERED=1         # Prevent buffering stdout/stderr

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
# Copy requirements.txt first to leverage Docker cache
COPY requirements.txt /app/
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . /app/

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the port Fly.io will use
EXPOSE 8000

# Start Gunicorn
# Use PORT environment variable set by Fly.io
CMD ["gunicorn", "myportfolio.wsgi:application", "--bind", "0.0.0.0:${PORT:-8000}"]
