# base image to Ubuntu
FROM ubuntu:bionic

# Update the repository sources list and install gnupg2
RUN apt-get update && apt-get install -y gnupg2 && apt-get install -y wget

# Add the package verification key
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -

# Add MongoDB to the repository sources list
RUN echo "deb https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list

# Update the repository sources list
RUN apt-get update

# Install MongoDB package (.deb)
RUN apt-get install -y mongodb

# Create the default data directory
RUN mkdir -p /data/db

# Expose the default port
EXPOSE 27017

# Default port to execute the entrypoint (MongoDB)
CMD ["mongod","--bind_ip","0.0.0.0"]
