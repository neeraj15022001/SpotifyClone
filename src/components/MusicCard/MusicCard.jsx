import React from "react";
import "./musicCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

function MusicCard({image, albumName, artistName}) {
  return (
    <div className="musicCard">
      <CardActionArea className="musicCardArea">
        <Card className="musicCardCard">
          <div className="musicCard__Image__Container">
            <CardMedia
              title={artistName}
              image={image}
              className="musicCardImage"
            />
            <PlayCircleFilledWhiteIcon className="musicCard__icon" />
          </div>
          <CardContent className="musicCardContent">
            <Typography gutterBottom variant="h5" component="h2">
              {albumName}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="musicCardSubtitle"
            >
              {artistName}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}

export default MusicCard;
