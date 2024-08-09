FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get upgrade -y && \
    apt install -y python3.8 && \
    apt-get install -y python3-dev && \
    apt-get install -y pip

RUN pip install flask

RUN mkdir /app

COPY api.py /app/

RUN cd /app && \
    chmod u+x api.py

WORKDIR /app

CMD python3 api.py