import React from 'react';
import { SocialFeed } from '../components/social/SocialFeed';

export function SocialPage({ onOpenStory, onOpenVideo }) {
  return (
    <div className="page-social" style={{ paddingTop: '40px' }}>
      <SocialFeed 
        onOpenStory={onOpenStory} 
        onOpenVideo={onOpenVideo} 
      />
    </div>
  );
}
