FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y python3 && \
    apt-get install -y python3-dev && \
    apt-get install -y python3-pip

RUN pip install --break-system-packages flask

RUN mkdir -p /app

COPY api.py /app/

RUN cd /app && \
    chmod u+x api.py

WORKDIR /app

CMD python3 api.py