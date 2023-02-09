import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhac Hoa Thinh Hanh',
      thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/1/2/9/a129e59e225662fdb671350e4ae51cdf.jpg',
    },
    {
      id: 2,
      name: 'Rap Viet Nghe La Nghien',
      thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/1/c/101c660282e9df755a4b65e1677627e7.jpg',
    },
    {
      id: 3,
      name: 'Nhac Hoa Thinh Hanh',
      thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/e/e/d/deede1c57b9f630aa514943137d7b1a2.jpg',
    },
  ]
  return (
    <div>
      <h2>Co The Ban Se Thich</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;