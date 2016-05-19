# Running

```
gulp
```


## Kill process on port
```
sudo kill $(sudo lsof -t -i:8091)
```


## API

Projects:
```
http://localhost:8091/api/projects/create?name=ProjectName&createdBy=User&isOpened=false
http://localhost:8091/api/projects/delete?_id=572b7774c92aaf9626fb8b41
```

Views:
```

```

Points:
```
http://localhost:8091/api/points/read?viewID=5733880e896901274344b851
http://localhost:8091/api/points/readall
http://localhost:8091/
```

Users:
```

```

Screenshots:
```
/api/screenshots/create?url=google.com&file=file&directory=directory
/api/screenshots/read?group=group&project=directory&view=file2.png
```

+44 7530 634 778