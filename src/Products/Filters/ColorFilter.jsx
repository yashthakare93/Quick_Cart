import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

const colors = [
  { name: 'All', imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0ICA0IBwcHBw0HBwcHDQ8IDQcNFREWFhURExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFw8PFysZFRkrKy0rNysrKy4vLS0tKy0tLTArLisrKysrKy0tLSsrNy4rKzc3KysrKysrKysrKystK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EACMQAQEBAQEBAAICAgMBAAAAAAABAgMSERMhBEExgVFxkWH/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAYFB//EACIRAQEBAQEAAgICAwEAAAAAAAABAgMREhMEFCExBVFxQf/aAAwDAQACEQMRAD8A+qrVEfO3orREWilLRViBsDYOqBYIuwNhlDYCwUpdgbDLFWJBSlWBsNsDYbkcpNgLDrC9Q2UyUqwNM1AU2GQul6htBYOGQnRWj9QrSzck6Lpmi6o6BoKKgqQyB0Vuj1St03MNzC90rVHuk6p+YfmJQoh2c+mIr4L4vy0Y5ep6Dyg/0h/0J6+mrDKn1yMrixIpF+otERERVWilhDYOqobFl2BsMoaEUBYGwdiqKClLsL1DrAWGwcpGoXqH6heobKbmk0GjbC9GQ2FahWjtFaEdkjRWjtkaTw/IKXqi1S9UUh0gdUndHqk6p2MnZgN0ui0kjXz5WnQPxcgplWtf1P3W7nxT1f6n+QXVv+P1FzFv7v7OxybufBLZGf8AHUbpyRp+mA+1776v6CVf183cd6L6sP1Pqer9GgVr9QSK+oJaKq0VVhobBqoaKAqhVSRYLA2GBsMgpSdQvUPsL1DIbKz6heofqFag5Tc0jRWjtQnRkPyRsjbRtm2ORpwVqlapmi6djna0QvRWjbAWN/HgbKX8S/Imtf1n/wBTPP7/AJely4D/AOgv2/8AyDxyOxzOzzb+fHwGunhWOR+OZmcG5y1Z5su+xfhGjyoz4Efc9R9X9LlX9fK/HOTRn1f0v6v6rwU0P6L6XKv6gvR/V/Q/V/UX6tYfq1r9RS1VS5VK+LRQpQqsEocF6CwvUNobDIOUjUJ3GjUK3BQ7NZdwjbVuEbybj+WjFZdwjcat5I3G3lz9acVl1AWG7hev1+69HlxaJS9f8kbv39T/AAPd+/8ASs5enx4nT+A5wdnC85Mkb8cgb6JnJmYqQ3Mac4ZN9F5hmYGDhsyxdOq/iLQfxZvudybXNMs6Cm3yj4vGm2qaX6ZpsU2G5Mm2j0uaIm1+w/Ec00TS5pnmlzavBzTR6X9ImxTahSnfU+lTQppQvR/U+h+ogpVqqIKSjlVQUdgaZM0cpeitG6L1Dc4puaTqE7y0aheo18uZ2ay7yz9Mtu4RvL0+PNoxph3n+2Xefrods/0Teb1ePNqxti/GKYafxrnN6PPC9dSJkUyf+MU5tWcsu+xMg5DJhfg6Ri6dgwUX5FMjkYunVSL8rX4R8z50FOjDOgp0fMbxeNOzdOgp0YZ0HOgLxps7Ns6DnRimx52H6KZOzXNim2WbHNK/Xps7RomhTRE0OaV+tTJ1h80ZKz5pmav9Yc6nyiKzTJVz8YU6CX8SLMn44p0VYXoyg0OcDc7L0Xoyl6Mzxac6L0XqG6LrVz5H5pOoVuH6I6X+no8sH5ZtRXkyxJHpcsn+gmBTmbnJkw2ZZ+m2f8a/xtMwng+Vj30ZvC/DR4TwOVl1q1n8J5P8q8i9Ks9J8od5Uv1XxcqCgYORxk/Hcv8ANcFKqRcgv10+Y5oedFyCkF+tBTrTs6HnRMFKn6sMnZomhzREo5U/VNnc/NMzSM03NT9U2dj803OmfNHNL/WMnZoml+iJtftP1zJ1N9BtL9q9gvBp59BWl2qug3S5xbuek1S9VdpetG55tmA7rPqj3oq1r54bMRBZgIZhtxB0zMOzkGIfmHSsu1TK/I5BSC9ZNZK8KuD/ACnkXyKuWe5D5ablVwL5B+LP4Q/wifJPi89IORJkcy8v6nE/JUgpFyCkX9SeqkXIKZFMr+tfoZBzI5gcwv6xQuZHmDmBTK/rg4GDlT4i5ygvl4KaF6K+quhfSv7TvafkZ7sN6JeJmezV7V7ZfyL/ACF3g28evrRdBuyfyBvQv6Xr8L6brZW9l66Fa6LnJ63HI9aB6K10DNnZx435x/DRmn4ZsU/FML3GnB2az4p2av1n1DpRwrJuU9JsFIKRWRxPkVYHyng2Rci/kXYT4Q/yi/kp5iYFMNM5inIPjhfizTA5hpnIc5J4uZZs8xzm0zmKc0HMs8wOYPnMXhBzJHlPJ/hVwuRPCLFWHXILkcgaTS9HahWoZMlUnVK1ozcI2ZMl3VT2v8hNoLUvONv4+76feob1Z9bK10LvJ0v4f8tOuxOuzL06s++wfrdN+Ny9jdepmNuXns1cupep4365eR0+emjFc/n0auey6yby3Yp2ayY2fjQfWTWWnNNyz40dmq9I1DsmQrNMynpNMg4DI4v0urRaJ6BzJzFObROY5gfrj5hnnMU5tEwvwnopgicxTB3lPKC+JPlPJvxVi08L8huTaGjgbCdQvUO0VqjheidQnZu9M/TRuYRqldGbpTOu2Pr0Pzlm1petla2VvqRvqZ8G38W+03fQjfQrXQq6Dcut/Az6Pp0Zt7FvRG6VY7D8TP8AAp0aePVgtM57J3l6Osex2OXVr59HH5dGzl1ZtZYunN1ufRp57cvn0aufQqsW+bpY2djbn420Y2pk3huzo7OmLGzsaUz6w150bmsudG50npGsn/UL+ogPDJkUyORfwxy0yDynwYatfig0VDVwNVQUVoLRyAqrQaq7S9UcgLQ6pO9C3pn6aNzCN6D00y9Nj6bY+3Roxlj6b8B26Ob/ACP5H9T9i/lfyPv6n+653XbZz5/7eb0723zI9fyf6Drr9Y+u/wB/7HNGaxI9X/GW6vlO9KtB9S1l2738DP8ASapWqK0GiK6z8YNXihqZpeo9P/xpxpo57ZM07NI1CdZdDl0a+XRysbaefQnWWTpzdbn0aMbczn0aefQqxj3zdLGz8bc7G2jGwMm8OhjZudMONn52pm1hrmkI9Ihfxdb6n1EOckq0N0iCgaG0N0iCgKC6BdIhkhdpetE72iGSE6pHTozdeqIfiRk6arF3/kSOZ/I/k/f1P1P+URu5ZjyPyOuvfGHptm6aUjRCsRl6a/f+zs1EV0/p0H+Kk+QvqfURj2778Kf0G0NqkIrp/wAcNVKiBr1M/wBHY0bnSkI1AahudG42iF2E6h/Pq08+yIVqM+8xp592jHdEKsZN4jRjufjspAVl3iG/mWiBJ+Mf/9k=' },
  { name: 'Red', color: '#f56565' },
  { name: 'Blue', color: '#4299e1' },
  { name: 'Green', color: '#48bb78' },
  { name: 'Gray', color: '#a0aec0' },
  { name: 'Black', color: '#2d3748' },
  { name: 'White', color: '#edf2f7' },
];

const ColorFilter = () => {
  const { selectedColor, handleSelectColor } = useContext(FilterContext);

  
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Colors</h3>
      <ul className="flex flex-wrap gap-1">
        {colors.map(color => (
          <li
            key={color.name}
            className="flex items-center cursor-pointer"
            onClick={() => handleSelectColor(color.name.toLowerCase())}
          >
            {color.name === 'All' ? (
              <img src={color.imageUrl} alt="All" className="w-10 h-10 object-cover border border-gray-300" />
            ) : (
              <div
                className={`w-10 h-10 inline-block border border-gray-300 ${selectedColor === color.name.toLowerCase() ? 'border-transparent' : 'bg-white'}`}
                style={{ backgroundColor: color.color }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorFilter;
