FROM nginx:latest

COPY . /etc/nginx/conf.d/

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]