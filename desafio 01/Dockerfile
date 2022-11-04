FROM golang AS builder

WORKDIR /go/src/app

COPY ./src .

RUN go build hello-world.go

FROM scratch

WORKDIR /go/src/app

COPY --from=builder /go/src/app .

CMD [ "/go/src/app/hello-world" ]